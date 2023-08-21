import { User } from "../../models/index.js";
import { HttpError} from "../../helpers/index.js";
import "dotenv/config";
import { ctrlWrapper } from "../../decorators/index.js";
import sendEmail from "../../services/email/sendEmail.js";

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(404, "User not found")
    }
    
    if (user.verify) {
        throw HttpError(400, "Verification has already been passed")
    }

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a href="${BASE_URL}/api/auth/verify/${user.verificationToken}" target="_blank">Click to verify</a>`
    }

    await sendEmail(verifyEmail);

    res.json({
        message: "Verification email sent"
    })
};

export default ctrlWrapper(resendVerifyEmail);