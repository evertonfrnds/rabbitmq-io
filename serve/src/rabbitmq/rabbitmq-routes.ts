import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import RabbitMQServer from "./rabbitmq-server";

const rabbitRoutes = Router();

rabbitRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      category: Joi.string().length(1).required(),
      method: Joi.string().valid("GET_DATA"),
    },
  }),
  async (req, res) => {
    const server = new RabbitMQServer();

    await server.start("amqp://localhost");

    await server.publishInExchange(
      `category_${req.body.category}`.toLowerCase(),
      JSON.stringify({ method: req.body.method })
    );

    res.status(200).send();
  }
);

export default rabbitRoutes;
