"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banner_1 = require("./Banner");
/**
 * 委托模式:将要适配的对象缓存进自己的属性.再对要适配的对象的方法进行包装
 */
var PrintBanner2 = /** @class */ (function () {
    function PrintBanner2(string) {
        this.banner = new Banner_1.Banner(string);
    }
    PrintBanner2.prototype.printStrong = function () {
        this.banner.showwidthAster();
    };
    PrintBanner2.prototype.printWeak = function () {
        this.banner.showWidthParen();
    };
    return PrintBanner2;
}());
exports.PrintBanner2 = PrintBanner2;
//# sourceMappingURL=PrintBanner2.js.map