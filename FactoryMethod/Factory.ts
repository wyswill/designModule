import {Product} from "./Product";

export abstract class Factory {
  create(owner: string): Product {
    const p: Product = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  };

  abstract createProduct(owner: string): Product;

  abstract registerProduct(p: Product): void;
}