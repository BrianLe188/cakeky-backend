import { Router } from "express";
import UserRouter from "./users/client";

const router = Router();

router.use("/users", UserRouter);

export default router;
