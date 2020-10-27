import Troble from "./Troble";

export default abstract class Support {
  private name: string;
  private next: Support;

  Support(name: string) {
    this.name = name;
  }

  support(treble: Troble): void {
    if (this.resolve(treble)) this.done(treble);
    else if (this.next != null) this.next.support(treble);
    else this.fail(treble);
  }

  protected abstract resolve(trouble: Troble): boolean;

  protected fail(trouble: Troble): void {
    console.log(`${trouble} cannot be resolved`);
  }

  protected done(trouble: Troble): void {
    console.log(`${trouble}is resolved by ${this}`);
  }

  setNext(next: Support): Support {
    this.next = next;
    return next;
  }
}