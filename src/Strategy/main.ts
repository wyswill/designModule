import Player from "./Player";
import WinningStrategy from "./WinningStrategy";
import Hand from "./Hand";
import ProbStrategy from "./ProbStrategy";

const seed1: number = Number(process.argv[2]),
  seed2: number = Number(process.argv[3]);
if (!seed1 || !seed2) throw new Error("没有输入！！");
const player1: Player = new Player("Taro", new WinningStrategy(seed1));
const player2: Player = new Player("Hana", new ProbStrategy(seed1));
for (let i = 0; i < 10; i++) {
  let nextHand1: Hand = player1.nextHand(),
    nextHand2: Hand = player2.nextHand();
  if (nextHand1.isStrongerThan(nextHand2)) {
    console.log(`Winner: ${player1}`);
    player1.win();
    player2.lose();
  } else if (nextHand2.isStrongerThan(nextHand1)) {
    console.log(`Winner: ${player2}`);
    player2.win();
    player1.lose();
  } else {
    console.log("even...");
    player1.even();
    player2.even();
  }
  console.log("Total resault:");
  console.log(player1);
  console.log(player2);
}
