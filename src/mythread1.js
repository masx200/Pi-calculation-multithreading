import { decimalchildwork } from "./decimalchildwork";
(() => {
    // importScripts(
    //     "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.min.js"
    // );
    // importScripts("./decimal.min.js");
    /** 
     * 
     * 
    *
    *
    *
    * 
    * https://github.com/MikeMcl/decimal.js
    An arbitrary-precision Decimal type for JavaScript.

    
Build Status CDNJS



Features
Integers and floats
Simple but full-featured API
Replicates many of the methods of JavaScript's Number.prototype and Math objects
Also handles hexadecimal, binary and octal values
Faster, smaller, and perhaps easier to use than JavaScript versions of Java's BigDecimal
No dependencies
Wide platform compatibility: uses JavaScript 1.5 (ECMAScript 3) features only
Comprehensive documentation and test set
Includes a TypeScript declaration file: decimal.d.ts
API

The library is similar to bignumber.js, but here precision is specified in terms of significant digits rather than decimal places, and all calculations are rounded to the precision (similar to Python's decimal module) rather than just those involving division.

This library also adds the trigonometric functions, among others, and supports non-integer powers, which makes it a significantly larger library than bignumber.js and the even smaller big.js.

For a lighter version of this library without the trigonometric functions see decimal.js-light. 


JavaScript的任意精度Decimal类型。

    




特征
整数和浮点数
简单但功能齐全的API
复制JavaScript的Number.prototype和Math对象的许多方法
还处理十六进制，二进制和八进制值
比Java的BigDecimal的JavaScript版本更快，更小，也许更容易使用
没有依赖
广泛的平台兼容性：仅使用JavaScript 1.5（ECMAScript 3）功能
全面的文档和测试集

*/

    addEventListener("message", function (event) {
        var piwei;
        piwei = event.data[0];
        var threadall = event.data[1];
        var threadid = event.data[2];
        console.log(
            "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n"
        );
        console.log(...event.data);

        const { p, x } = decimalchildwork(piwei, threadall, threadid);
        postMessage([String(p), String(x)]);
    });
})();
