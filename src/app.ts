import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleErrors);

export default app;
