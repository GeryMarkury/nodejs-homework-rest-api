import Contact from "../models/contact.js";

import { HttpError } from "../helpers/index.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
     const result = await Contact.find();
    res.json(result);
 }

// const updateContacts = contacts => fs.writeFile(filepath, JSON.stringify(contacts, null, 2));

// const listContacts = async () => {
//   const data = await fs.readFile(filepath);
//     return JSON.parse(data);
// }

// const getContactById = async (id) => {
//   const contacts = await listContacts();
//     const result = contacts.find(item => item.id === id);
//     return result || null;
// }

// const removeContact = async (id) => {
//   const contacts = await listContacts();
//     const index = contacts.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }

//     const [result] = contacts.splice(index, 1);
//     await updateContacts(contacts);
//     return result;
// }

// const addContact = async ({ name, email, phone }) => {
//   const contacts = await listContacts();
//     const newContact = {
//         id: nanoid(),
//         name,
//       email,
//         phone,
//     }
//     contacts.push(newContact);
//     await updateContacts(contacts);
//     return newContact;
// }

// const updateContact = async (id, { name, email, phone }) => {
//    const contacts = await listContacts();
//     const index = contacts.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }
//     contacts[index] = {id, name, email, phone};
//     await updateContacts(contacts);
//     return contacts[index];
// }

// export default {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
// *********************************************************************************************************

// import Movie from "../models/movie.js";

// import { HttpError } from "../helpers/index.js";

// import { ctrlWrapper } from "../decorators/index.js";

// const getAll = async (req, res) => {
//     const result = await Movie.find({}, "-createdAt -updatedAt");
//     res.json(result);
// }

// const getById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Movie.findById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
// }

// const add = async (req, res) => {
//     const result = await Movie.create(req.body);
//     res.status(201).json(result);
// }

// const updateById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Movie.findByIdAndUpdate(id, req.body, { new: true });
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
// }

// const updateFavorite = async (req, res) => {
//     const { id } = req.params;
//     const result = await Movie.findByIdAndUpdate(id, req.body, { new: true });
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
// }

// const deleteById = async (req, res) => {
//     const { id } = req.params;
//     const result = await Movie.findByIdAndDelete(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json({
//         message: "Delete success"
//     })
// }

export default {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    // add: ctrlWrapper(add),
    // updateById: ctrlWrapper(updateById),
    // updateFavorite: ctrlWrapper(updateFavorite),
    // deleteById: ctrlWrapper(deleteById),
}