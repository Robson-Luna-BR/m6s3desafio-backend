import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { clientRoutes } from "./routes/client.routes";
import cors from "cors"

const app = express();
app.use(express.json());

app.use(cors())

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/client", clientRoutes);
app.use(handleErrors);

export default app;
