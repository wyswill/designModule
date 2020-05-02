import {Banner} from "./Banner";
import {Print} from "./interfaces";

/**
 * 委托模式:将要适配的对象缓存进自己的属性.再对要适配的对象的方法进行包装
 */
export class PrintBanner2 implements Print {
  private banner: Banner;

  constructor(string: string) {
    this.banner = new Banner(string);
  }

  printStrong(): void {
    this.banner.showwidthAster();

  }

  printWeak(): void {
    this.banner.showWidthParen();
  }

}