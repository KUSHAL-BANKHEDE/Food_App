const {Router} = require("express");
const menu = require('../controler/menu')
const router = Router();

router.get("/restaurant/:resId" , menu);

module.exports = router;