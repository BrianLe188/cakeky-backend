import { Router } from "express";
import ClientRouter from "./client";
import AdminRouter from "./admin";

const router = Router();

router.use("/", ClientRouter);
router.use("/admin", AdminRouter);

export default router;
