import FileThreatenDeception from "./FileTreatedException";

export default abstract class Entry {
  public abstract getName(): string

  public abstract getSize(): number

  public abstract printList(prefix: string): void

  public abstract setParent(parent: Entry): void;

  public abstract hasParent(): boolean;

  public abstract getParent(): Entry;

  public getFullPath(entry: Entry): string {
    let fullPath = [entry.getName()];
    let p: Entry = entry.getParent();
    while (p.hasParent()) {
      fullPath.unshift(p.getName());
      p = p.getParent();
    }
    if (!p.hasParent()) fullPath.unshift(p.getName());
    return fullPath.join("/");
  }

  public add(entity: Entry): void {
    throw new FileThreatenDeception("文件错误!");
  }

  public toString(): string {
    return `${this.getName()}(${this.getSize()})`;
  }
}