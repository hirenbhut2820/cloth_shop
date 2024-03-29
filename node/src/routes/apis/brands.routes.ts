import { Router } from "express";
import brandController from "../../controllers/brands/brands.controller";
import { validateBodyRequest, validateParamsRequest } from "../../requests/validator";
import { brandAddRequest } from "../../requests/brands/brands.add.request";
import { IdQueryParamsRequest } from "../../requests/common/id.params.request";
import { brandUpdateRequest } from "../../requests/brands/brands.update.request";

const router = Router();

router.get(
    "/",
    brandController.list
)

router.post(
    "/",
    validateBodyRequest(brandAddRequest),
    brandController.add
)

router.put(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    validateBodyRequest(brandUpdateRequest),
    brandController.update
)

router.delete(
    "/:id",
    validateParamsRequest(IdQueryParamsRequest),
    brandController.delete
)

export default router;