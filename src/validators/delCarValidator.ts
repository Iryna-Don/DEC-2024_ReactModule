import joi from 'joi';

export const delCarValidator = joi.object({
    id: joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            "number.base": "ID must be a number",
            "number.integer": "ID must be an integer",
            "number.min": "ID must be greater than 0",
            "any.required": "ID is required",
        }),
});
