const math = require("mathjs");


module.exports = function(strEval) {
    try {
        strRes = strEval ? String(math.eval(strEval)) : "Invalid input"
    } catch (e) {
        strRes = `Evaluation error : "${strEval}" is not a valid mathematical expression`
    }
    return strRes;
}