export class TipCalculator {
  private checkAmount: number;
  private tipPercentage: number;
  private numberOfPeople: number;

  constructor(
    checkAmount: number,
    tipPercentage: number,
    numberOfPeople: number
  ) {
    this.checkAmount = checkAmount;
    this.tipPercentage = tipPercentage;
    this.numberOfPeople = numberOfPeople;
  }

  calculateTip() {
    return this.checkAmount * (this.tipPercentage / 100);
  }

  calculateTotal() {
    return this.checkAmount + this.calculateTip();
  }

  calculateTipPerPerson() {
    return this.calculateTotal() / this.numberOfPeople;
  }
}
