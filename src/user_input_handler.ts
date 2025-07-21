import * as readline from 'readline';

export class UserInputHandler  {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  askQuestion(question: string): Promise<string>{
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  closeInterface(){
    this.rl.close();
  }
}
