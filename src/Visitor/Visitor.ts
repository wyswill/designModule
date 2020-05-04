import Entry from "./Entry";

export default abstract class Visitor {
  abstract visit(entry: Entry): void
}