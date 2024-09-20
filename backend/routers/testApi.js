const { Router } = require("express");
const test = require("../controler/test");

const router = Router();

router.get("/test", test);

module.exports = router;