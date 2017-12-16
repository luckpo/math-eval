"use strict"
const express = require('express');
const router = express.Router();
let evaluate = require("./controllers/evaluate")

/*
Evaluation
*/
//GET : evaluate string
router.post('/', evaluate.evaluate);
module.exports = router;
