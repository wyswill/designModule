import CountDisplay from "./CountDisplay";
import StringDisplayImpl from "./StringDisplayImpl";

const d3: CountDisplay = new CountDisplay(new StringDisplayImpl("*"));
d3.showStrings("<", ">", 10);
d3.showStrings("|", "-", 10);