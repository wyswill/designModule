import DisplayImpl from "./DisplayImpl";

export default class Display {
  imlp: DisplayImpl;

  constructor(impl: DisplayImpl) {
    this.imlp = impl;
  }

  open(): void {
    this.imlp.rawOpen();
  }

  print(): void {
    this.imlp.rawPint();
  }

  close(): void {
    this.imlp.rawClose();

  }

  display(): void {
    this.open();
    this.print();
    this.close();
  }

  getString(): string {
    return this.imlp.getString();
  }

  /**
   * 递增显示字符串
   * @param startChart 开始字符串
   * @param endChart 结束字符串
   * @param maxLen 最大长度
   */
  showStrings(startChart: string, endChart: string, maxLen: number) {
    let template: string = "";
    for (let i = 0; i < maxLen; i++) {
      console.log(`${startChart}${template}${endChart}`);
      template += this.getString();
    }
  }

}