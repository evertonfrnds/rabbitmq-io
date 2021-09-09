import { Schema, model } from "mongoose";

const DataSchema = model(
  "Data",
  new Schema({
    category: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  })
);

export default DataSchema;
