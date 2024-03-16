import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT;

const app = express();

AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("dev");
});
