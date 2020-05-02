declare abstract class AbstractDisplay {
  abstract open(): void;

  abstract print(): void;

  abstract close(): void;

  abstract display(): void;
}

declare class CharDisplay extends AbstractDisplay {
  private str: string;

  constructor(str: string);

  close(): void;

  display(): void;

  open(): void;

  print(): void;

}

declare class StringDisplay extends AbstractDisplay {
  close(): void;

  display(): void;

  open(): void;

  print(): void;

  printLine(): void;

}