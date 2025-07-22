"use strict";
// class TipCalculator
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
/*
function calculateTotal()

function calculateTip()

function calculateTipPerPerson()

function printTip()

Output:
--- Tip Calculation Summary ---++
Check Amount: $50.00
Tip Percentage: 15%
Tip Amount: $7.50
Total Bill: $57.50
Divide among people: yes
Split between how many people: 2
Each person pays: $28.75
-----------------------------

  static formatCurrency(amount: number, currency: string = "USD"): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  }
*/
