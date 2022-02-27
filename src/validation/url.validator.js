import Joi from "joi";

const UrlValidator = Joi.string()
  .uri()
  .message("url must be a valid URL string");

export default UrlValidator;
