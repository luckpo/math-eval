const expect = require("chai").expect;
const evaluate = require("../controllers/lib/mathEval");
const axios = require("axios");
const Q = require("q");
let config = require("./config");
let url = config.url;

console.log(`===\ntesting with "${url}" as url, please update tests/config.js if you need to change this url\n===\n`);

describe("Mathematical expression evaluation, black box test using ajax request", function () {
    describe("Evaluate valid expressions", function () {
        it("Only valid expressions", function () {

            var exp1 = "(5+3)*(3/4)+sin(5)",
                exp2 = "sqrt(5)^5.5/pi",
                exp3 = "log(1)";

            var res1 = "5.041075725336862";
            var res2 = "26.608331295444803";
            var res3 = "0";

            axios.post(url, { expression: `${exp1}` })
                .then(function (data) {
                    axios.post(url,{ expression: `${exp2}` })
                        .then(function (data2) {
                            axios.post(url,{ expression: `${exp3}` })
                                .then(function (data3) {
                                    expect(String(data.data)).to.equal(res1);
                                    expect(String(data2.data)).to.equal(res2);
                                    expect(String(data3.data)).to.equal(res3);
                                })
                        })
                })

        });
    });

    describe("Evaluate invalid expressions", function () {
        it("Only invalid expressions", function () {

            var exp1 = "crafting with cat hair",
                exp2 = "1+a",
                exp3 = "";

            var res1 = `Evaluation error : "crafting with cat hair" is not a valid mathematical expression`;
            var res2 = `Evaluation error : "1+a" is not a valid mathematical expression`;
            var res3 = "Invalid input";

            axios.post(url,{ expression: `${exp1}` })
                .then(function (data) {
                    axios.post(url, { expression: `${exp2}` })
                        .then(function (data2) {
                            axios.post(url,{ expression: `${exp3}` })
                                .then(function (data3) {
                                    expect(String(data.data)).to.equal(res1);
                                    expect(String(data2.data)).to.equal(res2);
                                    expect(String(data3.data)).to.equal(res3);
                                })
                        })
                })

        });
    });
});