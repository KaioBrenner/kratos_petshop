const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {
  async createProduto(req, res) {
    try {
      const { name, category, stock, price } = req.body;
      
    
      const product = new Product({
        name,
        category,
        stock,
        price,
      });

      product.save();
      res.json(product);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao criar o Produto" });
    }
  },

  async productList(req, res) {
    try {
      const productList = await Product.find();
      res.json(productList);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os produtos" });
    }
  },

  async deleteProduct(req, res) {
    try {
      const result = await Product.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o produto" });
    }
  },

  async getProduct(req, res) {
    try {
      const result = await Product.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas o produto" });
    }
  },
  
};
