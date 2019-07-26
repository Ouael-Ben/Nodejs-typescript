import { Request, Response } from "express";

export class UserController {

    constructor() { }

    public getUser(req: Request, res: Response) {

        const param = req.params.user;

        res.send(param);
    }
}
