import Directory from "./Directory";
import Entry from "./Entry";

export default class Iterator {
  private readonly directory: Array<Entry>;
  private index: number = 0;

  constructor(directory: Array<Entry>) {
    this.directory = directory;
  }

  hasNext(): boolean {
    return this.directory.length > this.index;
  }

  next(): Entry {
    const entry: Entry = this.directory[this.index];
    this.index++;
    return entry;
  }
}