import Display from "./Display";
import StringDisplay from "./StringDisplay";
import SideBorder from "./SideBorder";
import FullBorder from "./FullBorder";

const b1: Display = new StringDisplay("Hello,World");
const b2: Display = new SideBorder(b1, "#");
const b3: Display = new FullBorder(b2);
const d4: Display = new SideBorder(new FullBorder(new FullBorder(new SideBorder(new FullBorder(new StringDisplay("你好,世界")), "*"))), "/");
b1.show();
b2.show();
b3.show();
d4.show();