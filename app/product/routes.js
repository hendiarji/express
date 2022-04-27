const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const fs = require("fs");
const path = require("path");
const connection = require("../../config/mysql");
const { response } = require("express");
// const { path } = require("express/lib/application");

router.get("/product", (req, res) => {
  connection.connect();
  connection.query(
    {
      sql: "select * FROM products",
    },
    (error, result) => {
      if (error) {
        res.send({
          status: "failed",
          response: "failed to fetch data",
        });
      } else {
        res.send({
          status: "success",
          response: result,
        });
      }
    }
  );
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post("/product/", upload.single("image"), (req, res) => {
  const { name, price, stock, status } = req.body;
  if (image) {
    const target = path.join(__dirname, "uploads", req.file.originalname);
    fs.renameSync(req.path, target);
    res.json({
      name,
      price,
      stock,
      status,
      image: req.file.originalname,
    });
  }
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({ category, tag });
});

// app.post("/cover", upload.single("image"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

module.exports = router;
