import Directory from "./Directory";
import File from "./File";
import ListVisitor from "./ListVisitor";
import FileFindViditor from "./FileFindViditor";

console.log(`创建root entries...`);
const rootDir: Directory = new Directory("root"),
  binDir: Directory = new Directory("bin"),
  tmpDir: Directory = new Directory("tmp");
rootDir.add(binDir.add(tmpDir.add(new File("vi", 101))));
tmpDir.add(new File("test1.html", 123));
tmpDir.add(new File("test.html", 12343));
tmpDir.add(new File("tessadfsdt.html", 13));
rootDir.accept(new FileFindViditor(".html"));