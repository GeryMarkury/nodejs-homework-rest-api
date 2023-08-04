import {Contact} from "../../models/index.js";

import { HttpError } from "../../helpers/index.js";

import { ctrlWrapper } from "../../decorators/index.js";

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Contact not found`);
    }
    res.json(result);
};

export default ctrlWrapper(updateFavorite);