export default class Hand {
  public static HANDVALUE_GUU: number = 0;
  public static HANDVALUE_CHO: number = 1;
  public static HANDVALUE_PAA: number = 2;
  private readonly handvalue: number;

  constructor(value: number) {
    this.handvalue = value;
  }

  public static hand: Hand[] = [new Hand(Hand.HANDVALUE_GUU), new Hand(Hand.HANDVALUE_CHO), new Hand(Hand.HANDVALUE_PAA)];
  public static names: string[] = ["石头", "剪刀", "布"];

  public static getHand(handValue: number): Hand {
    return this.hand[handValue];
  }

  public isStrongerThan(h: Hand): boolean {
    return this.fight(h) == 1;
  }

  private fight(h: Hand): number {
    if (this == h) return 0;
    else if ((this.handvalue + 1) % 3 == h.handvalue) return 1;
    else return -1;
  }

  public toString(): string {
    return Hand.names[this.handvalue];
  }
}