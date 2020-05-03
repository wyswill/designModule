import Border from "./Border";
import Display from "./Display";

export default class SideBorder extends Border {
  private borderChar: string;

  constructor(display: Display, ch: string) {
    super(display);
    this.borderChar = ch;
  }

  getColumns(): number {
    return this.display.getColumns() + 2;
  }

  getRows(): number {
    return this.display.getRows();
  }

  getRowText(row: number): string {
    return `${this.borderChar}${this.display.getRowText(row)}${this.borderChar}`;
  }
}