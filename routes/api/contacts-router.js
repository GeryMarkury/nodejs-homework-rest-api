import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";

const router = express.Router()


router.get('/', contactsController.getAll)

// router.get('/:id', async (req, res, next) => {
//   try {
//         const { id } = req.params;
//         const result = await contactsService.getContactById(id);
//         if (!result) {
//             throw HttpError(404, "Not found");
//         }
//         res.json(result);
//     }
//     catch (error) {
//         next(error);
//     }
// })

// router.post('/', async (req, res, next) => {
//  try {
//    const { error } = contactsSchemas.contactAddSchema.validate(req.body);
//         if (error) {
//             throw HttpError(400, error.message);
//         }
//         const result = await contactsService.addContact(req.body);
//         res.status(201).json(result);
//     }
//     catch (error) {
//         next(error);
//     }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//         const { id } = req.params;
//         const result = await contactsService.removeContact(id);
//         if (!result) {
//             throw HttpError(404, "Not found");
//         }

//         res.json({
//             message: "contact deleted"
//         })
//     }
//     catch (error) {
//         next(error);
//     }
// })

// router.put('/:id', async (req, res, next) => {
//   try {
//         const { error } = contactsSchemas.contactAddSchema.validate(req.body);
//         if (error) {
//             throw HttpError(400, "missing fields");
//         }
//         const { id } = req.params;
//         const result = await contactsService.updateContact(id, req.body);
//         if (!result) {
//             throw HttpError(404, "Not found");
//         }
//         res.json(result);
//     }
//     catch (error) {
//         next(error);
//     }
// })

export default router;