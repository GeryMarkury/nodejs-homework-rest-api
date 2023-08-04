import {Contact} from "../../models/index.js";

import { HttpError } from "../../helpers/index.js";

import { ctrlWrapper } from "../../decorators/index.js";

const deleteById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, `Contact not found`);
    }

    res.json({
        message: "Delete success"
    })
}; 

export default ctrlWrapper(deleteById);