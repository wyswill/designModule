import {Product} from "./Product";

export abstract class Factory {
  create(owner: string): Product {
    //子类中使用super调用父类方法时,父类方法的this指向调用父类方法的子类
    const p: Product = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  };

  abstract createProduct(owner: string): Product;

  abstract registerProduct(p: Product): void;
}