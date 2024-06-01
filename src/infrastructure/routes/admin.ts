import { Router } from "express";
import UserRouter from "./users/admin";

const router = Router();

router.use("/users", UserRouter);

export default router;
