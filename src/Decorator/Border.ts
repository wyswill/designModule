import Display from "./Display";

export default class Border extends Display {
  public getColumns(): number {
    throw new Error("Method not implemented.");
  }

  public getRows(): number {
    throw new Error("Method not implemented.");
  }

  public getRowText(row: number): string {
    throw new Error("Method not implemented.");
  }

  protected display: Display;

  constructor(display: Display) {
    super();
    this.display = display;
  }

}