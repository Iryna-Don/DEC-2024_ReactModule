import joi from 'joi';

export const newCarValidator = joi.object({
    brand: joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .min(1)
        .max(20)
        .required()
        .messages({
            "string.pattern.base":"The brand name must be between 1 and 20 characters long and must not contain spaces.",
            "string.min": "The brand name must be at least 1 character",
            "string.max": "The brand name must be no more than 20 characters",
        }),

    price: joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.max": "The price cannot be more than 1 000 000$",
            "number.min": "The min price is 0",
        }),

    year: joi.number()
        .min(1990)
        .max(2024)
        .required()
        .messages({
            "number.min": "The year of manufacture of the car cannot be less than 1990",
            "number.max": "The year of manufacture of the car cannot be later than 2025",
        }),

});
