const Joi = require('joi');

const logInSchema = Joi.object({
  username: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(7).alphanum().required(),
});

module.exports = { logInSchema };
