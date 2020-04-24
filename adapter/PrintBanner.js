"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Banner_1 = require("./Banner");
/**
 * 通过继承的方式进行适配,将适配器类归为要适配的类的子类.利用子类可以访问父类的特性对要适配的类进行包装.
 */
var PrintBanner = /** @class */ (function (_super) {
    __extends(PrintBanner, _super);
    function PrintBanner(string) {
        return _super.call(this, string) || this;
    }
    PrintBanner.prototype.printStrong = function () {
        this.showwidthAster();
    };
    PrintBanner.prototype.printWeak = function () {
        this.showWidthParen();
    };
    return PrintBanner;
}(Banner_1.Banner));
exports.PrintBanner = PrintBanner;
