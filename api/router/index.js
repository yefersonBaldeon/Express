const express = require("express");

const Router = express.Router();

const ProductApi = require("./products.router");




function RouterApi(app) {
  Router.use("/products", ProductApi);

  app.use("/api/v1", Router);
}

module.exports = RouterApi;
