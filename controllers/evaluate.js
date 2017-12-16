"use strict"

const mathEval = require("./lib/mathEval");
let evaluate = function (req, res, next) {

    console.log(req.body);
    let strRes = mathEval(req.body.expression);
    res.send(strRes)
}

module.exports = {
    evaluate: evaluate
}