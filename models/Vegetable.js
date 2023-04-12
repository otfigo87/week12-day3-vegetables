const mongoose = require("mongoose");

const vegetableSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  { timesStamps: true }
);

const Vegetable = mongoose.model("Vegetable", vegetableSchema)

module.exports = Vegetable;