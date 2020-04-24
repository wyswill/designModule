import {Print} from "./interfaces";
import {Banner} from "./Banner";

/**
 * 通过继承的方式进行适配,将适配器类归为要适配的类的子类.利用子类可以访问父类的特性对要适配的类进行包装.
 */
export class PrintBanner extends Banner implements Print {
  constructor(string: string) {
    super(string);
  }

  printStrong(): void {
    this.showwidthAster();
  }

  printWeak(): void {
    this.showWidthParen();
  }

}