import Hand from "./Hand";

export default interface IStrategy {
  nextHand(): Hand;

  sudy(win: boolean): void;
}