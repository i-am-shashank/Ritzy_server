const Product = require("../models/Product");

exports.men = (req, res) => {
  Product.find({ for: 1 }, function (err, result) {
    if (err) return console.log(err);
    res.send({ result: result });
  });
};
exports.women = (req, res) => {
  Product.find({ for: 0 }, function (err, result) {
    if (err) return console.log(err);
    res.send({ result: result });
  });
};
exports.unisex = (req, res) => {
  Product.find({ for: 2 }, function (err, result) {
    if (err) return console.log(err);
    res.send({ result: result });
  });
};
exports.all = (req, res) => {
  Product.find({}, function (err, result) {
    if (err) return console.log(err);
    res.send({ result: result });
  });
};
exports.buy = (req, res) => {
  Product.find({ _id: res.productId }, function (err, result) {
    if (err) return console.log(err);
    Product.findOneAndUpdate(
      { _id: req.body.productId },
      { inStock: req.body.items },
      { new: true, useFindAndModify: false },
      (err, updatedDoc) => {
        if (err) return console.log(err);
        console.log(req.body);
        res.send({ result: updatedDoc });
      }
    );
  });
};
exports.search = (req, res) => {
  Product.find(
    { description: { $regex: req.body.searchTxt, $options: "i" } },
    function (err, result) {
      if (err) return console.log(err);
      res.send({ result: result });
    }
  );
};
