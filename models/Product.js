const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  for: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
