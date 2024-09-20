const {Router} = require("express");
const update = require('../controler/update');


const router = Router();

router.post("/update" , update);

module.exports = router;