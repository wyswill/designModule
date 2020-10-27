export default class Troble {
  private readonly number: number;

  constructor(number: number) {
    this.number = number;
  }

  getNumber(): number {
    return this.number;
  }

  toString(): string {
    return `[Trouble]${this.number}`;
  }
}