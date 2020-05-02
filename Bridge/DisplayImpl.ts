export default abstract class DisplayImpl {
  abstract rawOpen(): void ;

  abstract rawPint(): void ;

  abstract rawClose(): void ;

  abstract getString(): string;
}