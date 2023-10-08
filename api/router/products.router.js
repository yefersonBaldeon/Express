const express = require("express");

const Router = express.Router();

const productService = require("../services/product.services");

const productServices = new productService();

Router.get("/",async (req, res) => {
  const products =  await productServices.find();
  res.json(products);
});

Router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = productServices.findOne(id);
  res.json(product);
});

Router.post("/", (req, res) => {
  const body = req.body;

  const newProduct = productServices.create(body);
  res.status(201).json(newProduct);
});

Router.patch("/:id", (req, res) => {


    try{

        const { id } = req.params;
        const body = req.body;
        const product = productServices.update(id, body);
        res.json(product);

    }
    catch(error){
        res.status(404).json({
            message: error.message
        });
    }

});


Router.delete("/:id", (req, res) => {

    try{


        const { id } = req.params;
        const product = productServices.delete(id);
        res.json({
            id:product
        });
    }

    catch(error){
        res.status(404).json({
            message: error.message
        });
    }
  });


module.exports = Router;
