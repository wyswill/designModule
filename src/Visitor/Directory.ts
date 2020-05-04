import Entry from "./Entry";
import Visitor from "./Visitor";
import Iterator from "./Iterator";

export default class Directory extends Entry {

  private readonly name: string;
  private dir: Array<Entry> = [];

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let size: number = 0;
    this.dir.map((ele) => {
      size += ele.getSize();
    });
    return size;
  }

  add(entry: Entry): Entry {
    this.dir.push(entry);
    return this;
  }

  iterator(): Iterator {
    return new Iterator(this.dir);
  }

  accept(v: Visitor) {
    v.visit(this);
  }
}