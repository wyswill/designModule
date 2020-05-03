import Entry from "./Entry";

export default class File extends Entry {
  private readonly name: string;
  private readonly size: number;
  public parent: Entry;

  constructor(name: string, size: number) {
    super();
    this.name = name;
    this.size = size;
  }

  getName(): string {
    return this.name;
  }

  getParent(): Entry {
    return this.parent;
  }

  getSize(): number {
    return this.size;
  }

  hasParent(): boolean {
    return this.parent ? true : false;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.name}`);
  }

  getFullPath(): string {
    return super.getFullPath(this);
  }

  setParent(parent: Entry): void {
    this.parent = parent;
  }

}