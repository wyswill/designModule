declare interface Print {
  printWeak(): void;

  printStrong(): void;
}

declare class Banner {
  private string: string;

  constructor(string: string) ;

  showWidthParen(): void ;

  showwidthAster(): void;
}

declare class PrintBanner {
  constructor(string: string)

  printStrong(): void ;

  printWeak(): void ;
}

declare class PrintBanner2 extends PrintBanner {
  private banner: Banner;

}