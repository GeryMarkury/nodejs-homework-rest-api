import {Contact} from "../../models/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5, favorite } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner, favorite }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  
    res.json(contacts);
};

export default ctrlWrapper(getAll);