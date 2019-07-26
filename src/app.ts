import dotenv from "dotenv";
import express from "express";
import path from "path";

import bodyParser from "body-parser";
import { IUser } from "./Models/user";
import routes from "./Routes";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", routes);

app.listen(port, () => {
    console.log(`Server listen on ${port}`);
});
