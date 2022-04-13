const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "/uploads" });
router.get("/", (req, res) => {
  const { page, total } = req.query;
  res.send({
    status: "Succesfully",
    message: "Welcome to Express JS Tutorial",
    page,
    total,
  });
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post("/product/", upload.single("image"), (req, res) => {
  const { name, price, stock, status } = req.body;
  const { image } = req.file;
  // console.log(req.file);
  res.json({
    name,
    price,
    stock,
    status,
    image,
  });
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
