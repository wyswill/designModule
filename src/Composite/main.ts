import Directory from "./Directory";
import File from "./File";

console.log("创建文件中...");
const rootDir: Directory = new Directory("root"),
  binDir = new Directory("bin"),
  tmpDir = new Directory("tmp"),
  usrDir = new Directory("usr");
rootDir.add(binDir).add(tmpDir).add(usrDir);
binDir.add(new File("vi", 1000)).add(new File("latex", 2000));
rootDir.printList("");
// new File("text", 12).add(rootDir);未实现抽象类add方法会报错
console.log("文件创建结束");