import express from "express";
import { errors } from "celebrate";
import routes from "./routes";
import "./db/connection"

const app = express();
app.use(express.json());
app.use(errors());

app.use(routes);

app.listen(3000, () => {
  console.log("Server started in port 3000");
});
