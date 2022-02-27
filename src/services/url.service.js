import UrlModel from "../models/url.model";
import { nanoid } from "nanoid";
import UrlValidator from "../validation/url.validator";

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
}

export default new UrlService();
