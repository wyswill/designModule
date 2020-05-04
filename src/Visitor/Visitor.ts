import Entry from "./Entry";
import Element from "./Element";

export default abstract class Visitor {
  abstract visit(entry: Entry | Element): void
}