import { Router } from "express";
import cartsController from "../../controllers/carts/carts.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { cartsAddRequest } from "../../requests/carts/carts.add.request";
import { cartsUpdateRequest } from "../../requests/carts/carts.update.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";

const router = Router();

router.get(
    "/",
    cartsController.list
)

router.post(
    "/",
    validateBodyRequest(cartsAddRequest),
    cartsController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(cartsUpdateRequest),
    cartsController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    cartsController.delete
)

export default router;