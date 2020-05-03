import Directory from "./Directory";
import File from "./File";

const rootDir: Directory = new Directory("root"),
  binDir = new Directory("bin"), suborder: Directory = new Directory("sub");
const f1: File = new File("f1", 1000);
rootDir.add(binDir);
binDir.add(suborder);
suborder.add(f1);
// rootDir.printList("");
// new File("text", 12).add(rootDir);未实现抽象类add方法会报错
console.log(binDir.getFullPath());
console.log(f1.getFullPath());
