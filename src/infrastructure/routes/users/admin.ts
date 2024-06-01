import { UserController } from "@/infrastructure/controllers";
import { Router } from "express";

const router = Router();

const userController = new UserController();

router.get("/", userController.demo);

export default router;
