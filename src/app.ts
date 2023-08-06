import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

app.use(handleErrors);

export default app;
