import Visitor from "./Visitor";

export default abstract class Element {
  abstract accept(v: Visitor)
}