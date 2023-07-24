import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";
import { isEmptyBody, isValidId } from "../../middlewars/index.js";
import validateBody from "../../decorators/validateBody.js";

const router = express.Router();


router.get('/', contactsController.getAll);

router.get('/:id', isValidId, contactsController.getById);

router.post('/', isEmptyBody, validateBody(contactsSchemas.contactAddSchema), contactsController.add);

router.put('/:id', isValidId, isEmptyBody, validateBody(contactsSchemas.contactAddSchema), contactsController.updateById);

router.patch('/:id/favorite', isValidId, isEmptyBody, validateBody(contactsSchemas.contactUpdateFavoriteSchema), contactsController.updateFavorite);

router.delete('/:id', isValidId, contactsController.deleteById);

export default router;