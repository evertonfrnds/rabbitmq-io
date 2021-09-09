import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import DataController from "../controllers/DataController";

const dataRoutes = Router();
const dataController = new DataController();

dataRoutes.get("/", async (req, res) => {
  const data = await dataController.index();

  res.json(data);
});

dataRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      category: Joi.string().required(),
      value: Joi.string().required(),
    },
  }),
  async (req, res) => {
    const { category, value } = req.body;
    const data = await dataController.create({ category, value });

    res.json(data);
  }
);

export default dataRoutes;
