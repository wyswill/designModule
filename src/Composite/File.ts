import Entry from "./Entry";

export default class File extends Entry {
  private readonly name: string;
  private readonly size: number;

  constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.name}`);
  }

}