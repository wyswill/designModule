import IStrategy from "./IStrategy";
import Hand from "./Hand";

export default class Player {
  private name: string;
  private strategy: IStrategy;
  private wincount: number;
  private losecount: number;
  private gamecount: number;

  constructor(name: string, strategy: IStrategy) {
    this.name = name;
    this.strategy = strategy;
  }

  nextHand(): Hand {
    return this.strategy.nextHand();
  }

  win(): void {
    this.strategy.sudy(true);
    this.wincount++;
    this.gamecount++;
  }

  lose(): void {
    this.strategy.sudy(false);
    this.losecount++;
    this.gamecount++;
  }

  even(): void {
    this.gamecount++;
  }
}