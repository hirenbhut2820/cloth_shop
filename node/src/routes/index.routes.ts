import { Router } from "express";
import apiRoutes from "./apis/index.routes"
const router = Router();

router.use("/api", apiRoutes);

export default router