import { Request, Response, Router } from "express";
import authRoutes from "./auth.routes";
import categoriesRoutes from "./categories.routes";
import brandRoutes from "./brands.routes";
import couponsRoutes from "./coupons.routes";
import ordersRoutes from "./orders.routes";
import cartsRoutes from "./carts.routes";
import productsRoutes from "./products.routes";
const router = Router();

router.use("/auth", authRoutes);

router.use("/categories", categoriesRoutes)

router.use("/brands", brandRoutes);

router.use("/coupons", couponsRoutes);

router.use("/orders", ordersRoutes);

router.use("/carts", cartsRoutes);

router.use("/products", productsRoutes);

export default router;