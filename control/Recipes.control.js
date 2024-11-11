const RecipesRouter = require("express").Router();
// fetch all the orders
RecipesRouter.get("/", function (req, res) {
  return res.status(200).json({
    message: "recipes fetched successfully",
    success: true,
  });
});
// fetch a single order
RecipesRouter.get("/:recipeId", function (req, res) {
  return res.status(200).json({
    message: "recipe fetched successfully",
    success: true,
  });
});
// create a recipe
RecipesRouter.post("/createRecipe", function (req, res) {
  console.log(req.body);
  return res.status(200).json({
    message: "recipe created successfully",
    success: true,
  });
});
module.exports = RecipesRouter;
