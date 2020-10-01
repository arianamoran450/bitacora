import { Schema, model } from "mongoose";

const ExampleSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, default: 0 },
});

export default model("Example", ExampleSchema);
