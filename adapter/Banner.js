"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banner = /** @class */ (function () {
    function Banner(string) {
        this.string = string;
    }
    Banner.prototype.showWidthParen = function () {
        console.log(this.string);
    };
    Banner.prototype.showwidthAster = function () {
        console.log("****" + this.string + "****");
    };
    return Banner;
}());
exports.Banner = Banner;
