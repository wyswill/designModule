import Random from "./Random";
import Hand from "./Hand";
import IStrategy from "./IStrategy";

export default class ProbStrategy implements IStrategy {
  private random: Random;
  private preHandValue: number = 0;
  private currentHandValue: number = 0;
  private history: number[][] = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

  constructor(seed: number) {
    this.random = new Random(seed);
  }

  nextHand(): Hand {
    let bet: number = this.random.nextInt(this.getSum(this.currentHandValue));
    let handValue: number = 0;
    if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      handValue = 1;
    } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      handValue = 1;
    } else handValue = 2;
    this.preHandValue = this.currentHandValue;
    this.currentHandValue = handValue;
    return Hand.getHand(handValue);
  }

  private getSum(hv: number): number {
    let sum: number = 0;
    for (let i = 0; i < 3; i++) {
      sum += this.history[hv][i];
    }
    return sum;
  }

  sudy(win: boolean): void {
    if (win) this.history[this.preHandValue][this.currentHandValue]++;
    else {
      this.history[this.preHandValue][(this.currentHandValue + 1) % 3]++;
      this.history[this.preHandValue][(this.currentHandValue + 2) % 3]++;
    }
  }
}
