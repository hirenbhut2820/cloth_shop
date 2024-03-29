import { Router } from "express";
import ordersController from "../../controllers/orders/orders.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { ordersAddRequest } from "../../requests/orders/orders.add.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";
import { ordersUpdateRequest } from "../../requests/orders/orders.update.request";

const router = Router();

router.get(
    "/",
    ordersController.list
)

router.post(
    "/",
    validateBodyRequest(ordersAddRequest),
    ordersController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(ordersUpdateRequest),
    ordersController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    ordersController.delete
)

export default router;