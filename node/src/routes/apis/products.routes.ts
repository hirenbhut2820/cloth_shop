import { Router } from "express";
import productsController from "../../controllers/product/products.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { productAddRequest } from "../../requests/products/product.add.request";
import { productUpdateRequest } from "../../requests/products/product.update.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";

const router = Router();

router.get(
    "/",
    productsController.list
)

router.post(
    "/",
    validateBodyRequest(productAddRequest),
    productsController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(productUpdateRequest),
    productsController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    productsController.delete
)

export default router;