import Display from "./Display";
import StringDisplay from "./StringDisplay";
import SideBorder from "./SideBorder";
import FullBorder from "./FullBorder";
import UpDownBorder from "./UpDwunBorder";

const b1: Display = new StringDisplay("Hello,World");
const b2: Display = new SideBorder(b1, "#");
const b3: Display = new FullBorder(b2);
const d4: Display = new FullBorder(new UpDownBorder(new SideBorder(new UpDownBorder(new SideBorder(new StringDisplay("你好世界"), "*"), "="), "|"), "/"));
d4.show();