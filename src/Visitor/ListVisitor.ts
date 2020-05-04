import Visitor from "./Visitor";
import Entry from "./Entry";
import Iterator from "./Iterator";
import File from "./File";

export default class ListVisitor extends Visitor {
  private current: string = "";

//接收要访问的节点
  visit(entry: Entry): void {
    console.log(`${this.current}/${entry.getName()}`);
    if (entry instanceof File) return;
    const saved: string = this.current;
    this.current = `${this.current}/${entry.getName()}`;
    const it: Iterator = entry.iterator();
    while (it.hasNext()) it.next().accept(this);
    this.current = saved;
  }
}