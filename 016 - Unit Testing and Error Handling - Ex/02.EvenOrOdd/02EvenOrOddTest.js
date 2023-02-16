let expect = require("chai").expect;
let isOddOrEven = require("./02EvenOrOdd.js");

describe("02 EvenOrOdd Tests", () => {
    it("should return undefined if there is no input", () => {
        expect(isOddOrEven()).to.be.undefined;
    });

    it("should return undefined if input is number", () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });

    it("should return undefined if input is array", () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it("should return undefined if input is object", () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it("should return 'odd' if input string.length is odd", () => {
        expect(isOddOrEven("a")).to.equal("odd");
    });
    it("should return 'odd' if input string.length is odd", () => {
        expect(isOddOrEven("abc")).to.equal("odd");
    });
    it("should return even if input is empty string", () => {
        expect(isOddOrEven("")).to.equal("even");
    });
    it("should return 'even' if input string.length is even", () => {
        expect(isOddOrEven("ab")).to.equal("even");
    });
});
