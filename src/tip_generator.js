"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipCalculator = void 0;
var TipCalculator = /** @class */ (function () {
    function TipCalculator(checkAmount, tipPercentage, numberOfPeople) {
        this.checkAmount = checkAmount;
        this.tipPercentage = tipPercentage;
        this.numberOfPeople = numberOfPeople;
    }
    TipCalculator.prototype.calculateTip = function () {
        return this.checkAmount * (this.tipPercentage / 100);
    };
    TipCalculator.prototype.calculateTotal = function () {
        return this.checkAmount + this.calculateTip();
    };
    TipCalculator.prototype.calculateTipPerPerson = function () {
        return this.calculateTotal() / this.numberOfPeople;
    };
    return TipCalculator;
}());
exports.TipCalculator = TipCalculator;
