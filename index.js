const Express = require("express");
const products = require("./products.json");

// ENVIRONMENT Variables config
require("dotenv").config();


const API_SERVER = Express();

// serving static
API_SERVER.use(Express.static("public"));

API_SERVER.get("/", function (req, res) {
  //   res.send("<h1>Express Server</h1>");
  return res.json({ message: "Express Server" });
});
// route2
// path=/products
// method=GET
API_SERVER.get("/products", function (req, res) {
  let result = [];
  const { limit, page } = req.query;
  if (limit && page) {
    const start = Number(limit) * Number(page - 1);
    const end = Number(limit) * Number(page);
    result = products.data.slice(start, end);
  } else {
    result = products.data;
  }
  //   res.send("<h1>Express Server</h1>");
  return res.json({
    message: "products fetched successfully",
    success: true,
    data: result,
  });
});

// route2
// path=/products/[productId]
// method=GET
API_SERVER.get("/products/:productId", function (req, res) {
  //   res.send("<h1>Express Server</h1>")
  const match = (products.data = products.data.find(
    (product) => product.id === parseInt(req.params.productId)
  ));
  if (!match) {
    return res.json({
      message: "product not found",
      success: false,
    });
  } else {
    return res.json({
      message: "product fetched successfully",
      success: true,
      data: match,
    });
  }
});
// start and listen incoming req to this server
API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
  console.log("Server is running on ");
  console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
