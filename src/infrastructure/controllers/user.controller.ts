import { UserService } from "@/applications/services";
import { Request, Response } from "express";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async demo(req: Request, res: Response) {}
}
