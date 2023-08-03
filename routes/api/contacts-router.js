import express from "express";
import {getAll, add, getById, deleteById, updateById, updateFavorite} from "../../controllers/contacts/index.js";
import {contactsSchemas} from "../../schemas/index.js";
import { isEmptyBody, isValidId, authenticate } from "../../middlewars/index.js";
import { validateBody } from "../../decorators/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', getAll);

contactsRouter.get('/:id', isValidId, getById);

contactsRouter.post('/', isEmptyBody, validateBody(contactsSchemas.contactAddSchema), add);

contactsRouter.put('/:id', isValidId, isEmptyBody, validateBody(contactsSchemas.contactAddSchema), updateById);

contactsRouter.patch('/:id/favorite', isValidId, isEmptyBody, validateBody(contactsSchemas.contactUpdateFavoriteSchema), updateFavorite);

contactsRouter.delete('/:id', isValidId, deleteById);

export default contactsRouter;