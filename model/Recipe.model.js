const mongoose = require("mongoose");
// schema
const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
});
// model
const res = mongoose.model("recipe", RecipeSchema);
