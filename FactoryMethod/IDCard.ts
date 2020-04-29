import {Product} from "./Product";

export class IDCard extends Product {
  private owner: string;
  private idNum: string | number

  constructor(owner: string) {
    super();
    console.log(`制作${owner}的ID卡`)
    this.owner = owner;
  }

  use(): void {
    console.log(`使用${this.owner}的ID卡`);
  }
}