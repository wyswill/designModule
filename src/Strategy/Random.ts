export default class Random {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  nextInt(num: number): number {
    return Math.floor((Math.random() * 10));
  }
}