import { User } from "../../models/index.js";
import { ctrlWrapper } from "../../decorators/index.js";
import Jimp from "jimp";
import fs from "fs/promises";
import path from "path";



const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: oldPath, filename } = req.file;

    Jimp.read(oldPath)
        .then((image) => {
            image.resize(250, 250);
            image.writeAsync(avatarPath);
        })
        .catch((err) => {
        console.log("Something went wrong")
    });

    const newFileName = `${_id}_${filename}`;
    const avatarPath = path.resolve("public", "avatars", newFileName);
    await fs.rename(oldPath, avatarPath);

    const avatarURL = path.join("avatars", newFileName);
    await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

export default ctrlWrapper(updateAvatar);