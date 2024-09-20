const {Router} = require("express");

const restaurent = require("../controler/restaurent");

const router = Router();

router.get("/restaurant" , restaurent);

module.exports = router;