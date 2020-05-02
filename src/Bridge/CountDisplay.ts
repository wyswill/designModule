import Display from "./Display";
import DisplayImpl from "./DisplayImpl";

export default class CountDisplay extends Display {
  constructor(impl: DisplayImpl) {
    super(impl);
  }

  /**
   *子类需要拓展新的方法
   * @param {number} times
   */
  multiDisplay(times: number): void {
    this.open();
    for (let i = 0; i < times; i++) {
      this.print();
    }
    this.close();
  }

  /**
   * 随机显示0~times次字符串
   * @param times
   */
  randomDisplau(times: number): void {
    for (let i = 0; i < Math.floor(Math.random() * times); i++) {
      console.log(this.getString());
    }
  }

  showStrings(startChart: string, endChart: string, maxLen: number) {
    super.showStrings(startChart, endChart, maxLen);
  }
}