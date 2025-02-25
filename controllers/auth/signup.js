import {User} from "../../models/index.js";
import bcrypt from "bcrypt";
import { HttpError } from "../../helpers/index.js";
import { ctrlWrapper } from "../../decorators/index.js";
import gravatar from 'gravatar';

const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) { 
        throw HttpError(409, "Email is already exists");
    };

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email, {}, true);
    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });
    
    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatarURL: newUser.avatarURL,
        }
    })
};

export default ctrlWrapper(signup);