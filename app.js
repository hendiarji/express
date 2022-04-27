const express = require("express");
const app = express();
const router = require("./app/product/routes");
const log = require("./middlewares/logger");
const productRouter = require("./app/product/routes");
const logger = require("morgan");
// const res = require("express/lib/response");
// const req = require("express/lib/request");

app.use(logger("dev"));
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "upload")));
app.use("/app/v1", productroater);
// app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + "Not Found",
  });
});
app.listen(3000, () => console.log("server: http://localhost:3000"));
