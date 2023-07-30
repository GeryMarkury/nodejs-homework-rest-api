import express from "express";
import usersSchemas from "../../schemas/users-schemas.js";
import validateBody from "../../decorators/validateBody.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post('/register', validateBody(usersSchemas.userSignupSchema), authController.signup);

authRouter.post('/login', validateBody(usersSchemas.userSigninSchema), authController.signin);

export default authRouter;