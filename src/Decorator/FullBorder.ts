import Border from "./Border";
import Display from "./Display";

export default class FullBorder extends Border {
  constructor(display: Display) {
    super(display);
  }

  getColumns(): number {
    return this.display.getColumns() + 2;
  }

  getRows(): number {
    return this.display.getRows() + 2;
  }

  getRowText(row: number): string {
    if (row == 0) return `+${this.makeLine("-", this.display.getColumns())}+`;
    else if (row == this.display.getRows() + 1) return `+${this.makeLine("-", this.display.getColumns())}+`;
    else return `|${this.display.getRowText(row - 1)}|`;
  }

  makeLine(ch: string, count: number): string {
    let buf: string = "";
    return buf.padEnd(count, ch);
  }
}