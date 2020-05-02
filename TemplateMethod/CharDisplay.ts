///<reference path="type.d.ts"/>
import {AbstractDisplay} from './AbstractDisplay'

export class CharDisplay extends AbstractDisplay {
  private str: string;

  constructor(str: string) {
    super();
    this.str = str;
  }

  close(): void {
    console.log('>>')
  }

  open(): void {
    console.log('<<');
  }

  print(): void {
    console.log(this.str);
  }

  display(): void {
    super.display();
  }

}