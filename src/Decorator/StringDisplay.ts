import Display from "./Display";

export default class StringDisplay extends Display {
  constructor(string: string) {
    super();
    this.string = string;
  }

  private string: string;

  getColumns(): number {
    return this.string.length;
  }

  getRowText(row: number): string {
    if (row == 0) return this.string;
    else return "";
  }

  getRows(): number {
    return 1;
  }

}