import { Router } from "express";
import authController from "../../controllers/Auth/index.controller"
import { validateBodyRequest } from "../../requests/validator";
import { loginRequestValidator } from "../../requests/Auth/login.request";
import { registerRequestValidator } from "../../requests/Auth/register.request";
import { verifyToken } from "../../middlewares/Auth";
const router = Router();

router.post(
    "/login",
    validateBodyRequest(loginRequestValidator),
    authController.login
)

router.post(
    "/signup",
    validateBodyRequest(registerRequestValidator),
    authController.signup
)

router.get(
    "/get-profile",
    verifyToken,
    authController.getProfile
)

router.get(
    "/logout",
    verifyToken,
    authController.logout
)

export default router;