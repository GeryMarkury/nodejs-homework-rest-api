import Joi from "joi";

const userSignupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatarURL: Joi.string(),
});

const userSigninSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const userEmailSchema = Joi.object({
    email: Joi.string().email().required(),
});

export default {
    userSignupSchema,
    userSigninSchema,
    userEmailSchema,
}