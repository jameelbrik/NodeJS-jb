const Joi = require('joi');

const usersValidator = Joi.object({
    symbol: Joi.string()
        .required()
        .min(3)
        .max(5)
        .alphanum()
        .uppercase()
});

module.exports = {
    usersValidator,
}
