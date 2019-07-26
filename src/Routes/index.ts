import { Router } from "express";
import UserRoute from "./User";

const routes = Router();

routes.use("/users", UserRoute);

export default routes;
