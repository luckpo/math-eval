var expect    = require("chai").expect;
var evaluate = require("../controllers/lib/mathEval");

describe("Mathematical expression evaluation, white box test", function() {
  describe("Evaluate valid expressions", function() {
    it("Only valid expressions", function() {
      var validExp1   = evaluate("(5+3)*(3/4)+sin(5)");
      var validExp2 = evaluate("sqrt(5)^5.5/pi");
      var validExp3  = evaluate("log(1)");

      expect(validExp1).to.equal("5.041075725336862");
      expect(validExp2).to.equal("26.608331295444803");
      expect(validExp3).to.equal("0");
    });
  });

  describe("Evaluate invalid expressions", function() {
    it("Only invalid expressions", function() {
        var validExp1   = evaluate("crafting with cat hair");
        var validExp2 = evaluate("1+a");
        var validExp3  = evaluate("");
  
        expect(validExp1).to.equal(`Evaluation error : "crafting with cat hair" is not a valid mathematical expression`);
        expect(validExp2).to.equal(`Evaluation error : "1+a" is not a valid mathematical expression`);
        expect(validExp3).to.equal(`Invalid input`);
    });
  });
});