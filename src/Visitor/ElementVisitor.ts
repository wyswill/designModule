import Visitor from "./Visitor";
import Iterator from "./Iterator";
import Entry from "./Entry";
import File from "./File";

export default class ElementVisitor extends Visitor {
  private current: string = "";

  visit(entry: Entry): void {
    const it: Iterator = entry.iterator();
    while (it.hasNext()) {
      const currentEntry: Entry = it.next();
      if (currentEntry instanceof File) {
        console.log(`${this.current}/${currentEntry.getName()}`);
        continue;
      }
      this.current = currentEntry.getName();
      currentEntry.accept(this);
    }
  }
}