///<reference path="type.d.ts"/>
import {CharDisplay} from './CharDisplay';
import {StringDisplay} from './StringDisplay'

const d1: AbstractDisplay = new CharDisplay('H');
const d2: AbstractDisplay = new StringDisplay('Hello,world');
const d3: AbstractDisplay = new StringDisplay('你好，世界');

d1.display();
d2.display();
d3.display();
