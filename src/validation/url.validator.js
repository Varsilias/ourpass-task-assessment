import Joi from "joi";

export const UrlValidator = Joi.string()
  .uri()
  .message("url must be a valid URL string");

export const ShortUrlValidator = Joi.string().uri().required().label("Short Url");
