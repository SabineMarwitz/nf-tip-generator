import { UserInputHandler } from "./user_input_handler"; 

async function runCode(){
    const input = new UserInputHandler()
    
    let checkAmount = await input.askQuestion("How high is the check? : ");
    console.log(checkAmount);

    let tip = await input.askQuestion("What percentage of tip will you give? : ");
    console.log(tip);
    
    let split = await input.askQuestion("Should the bill be split among multiple people? (yes/no) : ");
    console.log(split); 

    let num = 1;
    if(split == 'yes') {
       const res = await input.askQuestion("How many people will split the bill? : ");
       num = parseInt(res);
    }
    console.log(num);
    
    // call class TipCalculator
    
    
    input.closeInterface();
}

runCode();



    
    


