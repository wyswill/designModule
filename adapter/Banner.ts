export class Banner {
  private string: string;

  constructor(string: string) {
    this.string = string;
  }

  showWidthParen(): void {
    console.log(this.string);
  }

  showwidthAster(): void {
    console.log(`****${this.string}****`);
  }
}