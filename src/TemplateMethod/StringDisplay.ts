///<reference path="type.d.ts"/>
import {AbstractDisplay} from './AbstractDisplay'

export class StringDisplay extends AbstractDisplay {
  private args: string;

  constructor(args: string) {
    super();
    this.args = args;
  }

  close(): void {
    this.printLine();
  }

  display(): void {
    super.display();
  }

  open(): void {
    console.log('+---------+');
  }

  print(): void {
    console.log(`|${this.args}|`);
  }

  printLine(): void {
    console.log('+');
    for (let i = 0; i < this.args.length; i++) {
      console.log("-");
    }
    console.log('+');
  }
}