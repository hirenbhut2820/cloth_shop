import { Router } from "express";
import categoriesController from "../../controllers/categories/categories.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { categoryAddRequest } from "../../requests/categories/categories.add.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";
import { categoryUpdateRequest } from "../../requests/categories/categories.update.request";

const router = Router();

router.get(
    "/",
    categoriesController.list
)

router.post(
    "/",
    validateBodyRequest(categoryAddRequest),
    categoriesController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(categoryUpdateRequest),
    categoriesController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    categoriesController.delete
)

export default router;