const ProductsRouter = require("express").Router();
// fetch all the orders
ProductsRouter.get("/", function (req, res) {
  return res.status(200).json({
    message: "products fetched successfully",
    success: true,
  });
});
// fetch a single order
ProductsRouter.get("/:productId", function (req, res) {
  return res.status(200).json({
    message: "product fetched successfully",
    success: true,
  });
});
module.exports = ProductsRouter;
