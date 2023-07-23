import Joi from "joi";

const contactAddSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `missing required "name" field`,
    }),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favourite: Joi.boolean(),
});

const contactUpdateFavouriteSchema = Joi.object({
    favourite: Joi.boolean().required(),
});

export default {
    contactAddSchema,
    contactUpdateFavouriteSchema,
};

