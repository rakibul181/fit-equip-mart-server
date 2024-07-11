import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { categoryValidation } from "./category.validation";
import { categoryController } from "./category.controller";

const router = Router()

router.post(
    '/create-category',
    validateRequest(categoryValidation.createCategoryValidationSchema),
    categoryController.createCategory,
  )
  router.get('/', categoryController.getAllCategory)
  router.get('/:id', categoryController.getSingleCategoryByID)

  export const CategoryRoute = router