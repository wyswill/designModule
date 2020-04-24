import {Factory} from "./Factory";
import {Product} from "./Product";
import {IDCard} from "./IDCard";

export class IDCardFactory extends Factory {
  private owners: Product[];

  constructor() {
    super();
    this.owners = [];
  }

  create(owner: string): Product {
    return super.create(owner);
  }

  createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  registerProduct(p: Product): void {
    this.owners.push(p);
  }

  getOwners(): Product[] {
    return this.owners;
  }

}