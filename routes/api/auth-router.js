import express from "express";
import {usersSchemas} from "../../schemas/index.js";
import { validateBody } from "../../decorators/index.js";
import {updateAvatar, signup, signin, signout, getCurrent, verify, resendVerifyEmail} from "../../controllers/auth/index.js";
import {upload, authenticate} from "../../middlewars/index.js";

const authRouter = express.Router();

authRouter.post('/register', validateBody(usersSchemas.userSignupSchema), signup);

authRouter.get('/verify/:verificationToken', verify);

authRouter.post('/verify', validateBody(usersSchemas.userEmailSchema), resendVerifyEmail);

authRouter.post('/login', validateBody(usersSchemas.userSigninSchema), signin);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, signout);

authRouter.patch('/avatars', authenticate, upload.single("avatar"), updateAvatar);

export default authRouter;