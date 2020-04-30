import IStrategy from "./IStrategy";
import Hand from "./Hand";
import Random from "./Random";

export default class WinningStrategy implements IStrategy {
  private random: Random;
  private won: boolean = false;
  private preHand: Hand;

  constructor(seed: number) {
    this.random = new Random(seed);
  }

  nextHand(): Hand {
    return this.preHand = this.won ? this.preHand : Hand.getHand(this.random.nextInt(3));
  }

  sudy(win: boolean): void {
    this.won = win;
  }

}