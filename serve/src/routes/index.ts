import { Router } from "express";
import path from 'path'
import rabbitRoutes from "../rabbitmq/rabbitmq-routes";
import dataRoutes from "./data.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"))
})

routes.use("/rabbit", rabbitRoutes);
routes.use("/data", dataRoutes);

export default routes;
