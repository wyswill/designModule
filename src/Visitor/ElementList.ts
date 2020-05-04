import Element from "./Element";
import Visitor from "./Visitor";
import Entry from "./Entry";
import Iterator from "./Iterator";

export default class ElementList extends Element {
  private readonly list: Array<Entry> = [];

  add(value: Entry): ElementList {
    this.list.push(value);
    return this;
  }

  iterator(): Iterator {
    return new Iterator(this.list);
  }

  accept(v: Visitor) {
    v.visit(this);
  }
}