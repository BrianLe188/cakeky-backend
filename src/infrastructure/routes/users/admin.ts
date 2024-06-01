import { UserService } from "@/applications/services";
import { UserRepository } from "@/domain/repositories";
import { UserController } from "@/infrastructure/controllers";
import { Router } from "express";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get("/", userController.demo);

export default router;
