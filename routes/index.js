var express = require("express");
var router = express.Router();
import "dotenv/config";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(`Server running on ${process.env.PORT}`);
});

module.exports = router;
