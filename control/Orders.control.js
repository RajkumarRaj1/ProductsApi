const OrdersRouter = require("express").Router();
// fetch all the orders
OrdersRouter.get("/", function (req, res) {
  return res.status(200).json({
    message: "orders fetched successfully",
    success: true,
  });
});
// fetch a single order
OrdersRouter.get("/:orderId", function (req, res) {
  return res.status(200).json({
    message: "order fetched successfully",
    success: true,
  });
});
module.exports = OrdersRouter;
