import DisplayImpl from "./DisplayImpl";

export default class StringDisplayImpl extends DisplayImpl {

  private readonly string: string;
  private readonly width: number;

  constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }

  rawClose(): void {
    this.printLine();
  }

  rawOpen(): void {
    this.printLine();
  }

  rawPint(): void {
    console.log(`|${this.string}|`);
  }

  printLine(): void {
    let str: string = "+";
    for (let i = 0; i < this.width; i++) {
      str += "-";
    }
    str += "+";
    console.log(str);
  }

  getString(): string {
    return this.string;
  }
}