import urlService from "../services/url.service";


class UrlController {
  constructor() {
    this.urlService = urlService
  }

  async encode(request) {
    try {
      return await this.urlService.storeShortenedUrl(request)
    } catch (error) {
      return error
    }
  }

  async decode(request) {
    try {
      return await this.urlService.decodeUrl(request)
    } catch (error) {
      return error
    }
  }

  async getStatistic(shorty) {
    try {
      return await this.urlService.getUrlStatistic(shorty)
    } catch (error) {
      return error
    }
  }
}

export default new UrlController()