
const Product = require('../models/product');

exports.getAddProduct =  (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle : "Add the Products", path : "/admin/add-product"});
  };

exports.postAddProduct =  (req, res, next) => {
    //products.push({ title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };

exports.getProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  //const products = products;
  Product.fetchAll(products => {
      res.render('Shop', {prods : products, pageTitle : "Shoppie", path : "/"});
  });
};