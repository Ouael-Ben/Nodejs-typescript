import express from "express";
import { IUser } from "./models/user";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const user: IUser = {
        lastname: "ben",
        name: "ouael",

    };
    res.setHeader("Content-Type", "application/json");
    res.send(user);
});

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
});
