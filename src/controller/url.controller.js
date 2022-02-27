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
}

export default new UrlController()