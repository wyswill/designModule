import Element from "./Element";
import Visitor from "./Visitor";
import Iterator from "./Iterator";

export default abstract class Entry implements Element {
  abstract getName(): string

  abstract getSize(): number

  add(entry: Entry): Entry {
    throw new Error("FileTreatmenException");
  }

  iterator(): Iterator {
    throw new Error("FileTreatmenException");
  }

  abstract accept(v: Visitor);

  toString() {
    return `${this.getName()}(${this.getSize()})`;
  }
}