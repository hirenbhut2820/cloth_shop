import { Router } from "express";
import couponsController from "../../controllers/coupons/coupons.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { couponsAddRequest } from "../../requests/coupons/coupons.add.request";
import { couponsUpdateRequest } from "../../requests/coupons/coupons.update.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";

const router = Router();

router.get(
    "/",
    couponsController.list
)

router.post(
    "/",
    validateBodyRequest(couponsAddRequest),
    couponsController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(couponsUpdateRequest),
    couponsController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    couponsController.delete
)

export default router;