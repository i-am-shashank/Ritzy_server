const express = require("express");
const router = express.Router();

const { men, women, unisex, all, buy, search, addBulkProducts } = require("../controllers/product");
// router.get("/all", (req, res)=>{
//     console.log('hi')
//     res.send('as')
// });
router.get("/men", men);
router.get("/women", women);
router.get("/unisex", unisex);
router.get("/all", all);
router.post("/search", search);
router.post("/buy", buy);
router.post("/add", addBulkProducts)

module.exports = router;
