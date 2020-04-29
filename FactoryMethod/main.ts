import {IDCardFactory} from "./IDCardFactory";

const factory = new IDCardFactory();
const card1 = factory.create("小明");
const card2 = factory.create("小红");
const card3 = factory.create("小刚");

card1.use();
card2.use();
card3.use();

console.log(factory.getOwners())