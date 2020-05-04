import Display from "./Display";
import Border from "./Border";

export default class UpDownBorder extends Border {
  private readonly ch: string;

  constructor(display: Display, ch: string) {
    super(display);
    this.ch = ch;
  }

  getColumns(): number {
    return this.display.getColumns() + 2;
  }

  getRows(): number {
    return this.display.getRows() + 2;
  }

  getRowText(row: number): string {
    return `${this.ch}${this.display.getRowText(row)}${this.ch}`;
  }
}