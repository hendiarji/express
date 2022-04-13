const express = require("express");
const app = express();
const router = require("./routes");
const log = require("./middlewares/logger");
// const res = require("express/lib/response");
// const req = require("express/lib/request");

app.use(log);
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + "Not Found",
  });
});
app.listen(3000, () => console.log("server: http://localhost:3000"));
