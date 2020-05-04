import Visitor from "./Visitor";
import Entry from "./Entry";
import Iterator from "./Iterator";
import File from "./File";

export default class FileFindViditor extends Visitor {
  private readonly endSet: string;
  private current: string = "";

  constructor(endStr: string) {
    super();
    this.endSet = endStr;
  }

  visit(entry: Entry): void {
    if (entry instanceof File) {
      if (entry.getName().includes(this.endSet))
        console.log(`${this.current}/${entry.getName()} size: ${entry.getSize()}`);
      return;
    }
    const saved: string = this.current;
    this.current = `${this.current}/${entry.getName()}`;
    const it: Iterator = entry.iterator();
    while (it.hasNext()) it.next().accept(this);
    this.current = saved;
  }
}
