import { UserInputHandler } from "./user_input_handler";
import { TipCalculator } from "./tip_generator";
import { BillData } from "./bill_data";

function printBill(data: BillData) {
  let output = `\n
      --- Tip Calculation Summary ---+ \n
      Check Amount: $${data.checkAmount} \n
      Tip Percentage: ${data.tipPercentage}% \n
      Tip Amount: $${data.tipAmount} \n
      Total Bill: $${data.total} \n
      Divide among people: ${data.shouldSplit} \n
      Split between how many people: ${data.numberOfPeople} \n
      Each person pays: $${data.perPerson} \n
      ----------------------------- \n
    `;
  return output;
}

async function runCode() {
  const input = new UserInputHandler();

  let checkAmount = parseFloat(
    await input.askQuestion("How high is the check? : ")
  );

  let tipPercentage = parseFloat(
    await input.askQuestion("What percentage of tip will you give? : ")
  );

  let shouldSplit = await input.askQuestion(
    "Should the bill be split among multiple people? (yes/no) : "
  );

  let numberOfPeople = 1;
  if (shouldSplit == "yes") {
    const res = await input.askQuestion(
      "How many people will split the bill? : "
    );
    numberOfPeople = parseInt(res);
  }

  // call class TipCalculator
  const tipCalculator = new TipCalculator(
    checkAmount,
    tipPercentage,
    numberOfPeople
  );

  const tipAmount = tipCalculator.calculateTip();
  const total = tipCalculator.calculateTotal();
  const perPerson = tipCalculator.calculateTipPerPerson();

  // print bill
  const bill = printBill({
    checkAmount,
    tipPercentage,
    tipAmount,
    total,
    shouldSplit: shouldSplit as "yes" | "no",
    numberOfPeople,
    perPerson,
  });

  console.log(bill);

  input.closeInterface();
}

runCode();
