import express from "express";
import { Request, Response } from "express";
import {UserController} from "../Controllers/UserController";
import { IUser } from "../Models/user";

const router = express.Router();
const userController = new UserController();
router.get("/", (req, res) => {
    const user: IUser = {
        lastname: "ben",
        name: "ouael",
    };
    res.setHeader("Content-Type", "application/json");
    res.send(user);
});
router.get("/test", (req, res) => {

    res.send("test");
});
router.get("/:user", userController.getUser);

export default router;
