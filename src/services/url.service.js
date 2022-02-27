import UrlModel from "../models/url.model";
import { nanoid } from "nanoid";
import { UrlValidator, ShortUrlValidator } from "../validation/url.validator";
import usersagent  from "express-useragent";
import geoip from "geoip-lite";
import { countries } from "../utils/countries";

import "dotenv/config";

const APP_URL = process.env.APP_URL;

class UrlService {
  constructor() {
    this.urlModel = UrlModel;
  }

  async storeShortenedUrl(data) {
    try {
      const { url } = data;
      const validatedUrl = await UrlValidator.validateAsync(url);
      if (validatedUrl === undefined) {
        return { error: "No URL provided" };
      }
      const shorty = nanoid();
      const response = await this.urlModel.create({
        url: validatedUrl,
        shorty
      });
      return { shortUrl: `${APP_URL}/${response.shorty}` };
    } catch (error) {
      return error;
    }
  }

  async decodeUrl(data) {
    try {
      const shortUrl = data.body.shortUrl;
      const validatedUrl = await ShortUrlValidator.validateAsync(shortUrl);

      const source = data.headers['user-agent'];
      const client = usersagent.parse(source)

      const ipAddress = "185.104.184.156"                      // "37.120.137.70" Switzerland // 185.104.184.156 Germany // 197.210.227.173 Nigeria
      const geo = geoip.lookup(ipAddress)
      const country = countries.filter(element => element.code === geo.country )
      const location = country[0].name



      const shorty = validatedUrl.split("/")[3];
      const response = await this.findOne({ shorty });
      const obj = { ipAddress, location,  browser: client.browser }
      response.visitHistory.push(obj)
      response.clicks++
      response.lastVisited = new Date(Date.now()).toISOString()
      await response.save()
      console.log(response)
      return { url: response.url };
    } catch (error) {
      return error;
    }
  }

  async getUrlStatistic(shorty) {
    try {
      const response = await this.findOne({shorty})
      return response
    } catch (error) {
      return error
    }
  }

  async findOne(options = {}) {
    const found = await this.urlModel.findOne(options).exec();
    if (!found) {
      return { error: "Original Url not found" };
    }
    return found;
  }
}

export default new UrlService();
