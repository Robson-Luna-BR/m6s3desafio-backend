import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors);

export default app;
