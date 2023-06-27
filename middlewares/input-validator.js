const creaateHttpError = require('http-errors');

module.exports = (validator) => async (req, res, next) => {
    try{
        const validate = await validator.validateAsync(req.body);
        req.body = validate;
        return next();
    } catch (err) {
        if(err.isJoi){
            return next(creaateHttpError(422, {message: err.message}));
        }
        next(creaateHttpError(500));
    }
};