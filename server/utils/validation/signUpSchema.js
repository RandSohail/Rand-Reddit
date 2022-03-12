const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().min(5).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).alphanum().required(),
});

module.exports = { signUpSchema };
