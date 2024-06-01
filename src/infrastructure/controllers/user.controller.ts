import { UserService } from "@/applications/services";
import { UserRepository } from "@/domain/repositories";
import { Request, Response } from "express";

const userService = new UserService(new UserRepository());

export class UserController {
    async demo(req: Request, res: Response) {}
}
