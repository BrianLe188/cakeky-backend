import { UserController } from "@src/controllers";
import { Router } from "express";

const router = Router();

router.get("/", UserController.demo);

export default router;
