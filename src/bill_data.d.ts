export type BillData = {
  checkAmount: number;
  tipPercentage: number;
  tipAmount: number;
  total: number;
  shouldSplit: "yes" | "no";
  numberOfPeople: number;
  perPerson: number;
};
