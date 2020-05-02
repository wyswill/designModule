import Entry from "./Entry";

export default class Directory extends Entry {
  private readonly name: string;
  private readonly directory: Array<Entry> = [];

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let size: number = 0;
    this.directory.map((ele) => size += ele.getSize());
    return size;
  }

  add(entity: Entry) {
    this.directory.push(entity);
    return this;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.name}`);
    this.directory.map((ele) => {
      ele.printList(`${prefix}/${this.name}`);
    });
  }

}