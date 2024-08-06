import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { DriverController } from "./entrypoint/controllers/driver.controller.js";

const app = express();

useExpressServer(app, {
  controllers: [DriverController],
});

export default app;
