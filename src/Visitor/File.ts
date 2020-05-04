import Entry from "./Entry";
import Visitor from "./Visitor";

export default class File extends Entry {
  private readonly name: string;
  private readonly size: number;

  constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }

  accept(v: Visitor) {
    v.visit(this);
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

}