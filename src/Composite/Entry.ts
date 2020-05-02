import FileTreatenEception from "./FileTreatenEception";

export default abstract class Entry {
  public abstract getName(): string

  public abstract getSize(): number

  public abstract printList(prefix: string): void

  public add(entity: Entry): void {
    throw new FileTreatenEception("文件错误!");
  }

  public toString(): string {
    return `${this.getName()}(${this.getSize()})`;
  }
}