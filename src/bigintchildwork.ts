import bigInt from "big-integer";
import { abs, add, div, mul } from "./bigintextend";

export function bigintchildwork(
    piwei: number,
    threadall: number,
    threadid: number
): [string, string] {
    // bigInt.abs = (n) => bigInt(n).abs();

    // mul = (n, m) => bigInt(n).multiply(m);

    // div = (n, m) => bigInt(n).divide(m);
    // bigInt.add = (n, m) => bigInt(n).add(m);
    // //MAX_INT
    // //9007199254740992
    // bigInt().__proto__.cmp = bigInt().__proto__.compare;
    // bigInt().__proto__.div = bigInt().__proto__.divide;
    // bigInt().__proto__.mul = bigInt().__proto__.multiply;

    // bigInt("90071992547409920").__proto__.cmp =
    //     bigInt("90071992547409920").__proto__.compare;
    // bigInt("90071992547409920").__proto__.div =
    //     bigInt("90071992547409920").__proto__.divide;
    // bigInt("90071992547409920").__proto__.mul =
    //     bigInt("90071992547409920").__proto__.multiply;
    var p = bigInt(0);
    var a = bigInt(1);
    // var h = 1;
    var h = bigInt("1e" + (piwei - 1));
    // console.log("h",h.toString())
    var x = bigInt(0);
    var fu = 1;
    var t = bigInt(1);
    for (var i = 0, len = threadid; i < len; i++) {
        fu = -1 * fu;
        a = mul(a, 1024);
        x = x.plus(1);
    }
    while (abs(t).compare(bigInt(0)) >= 0) {
        // console.log("t",t.toString())
        // console.log("a",a.toString())
        // console.log("x",x.toString())
        // console.log("p",p.toString())
        /**除法小于零的结果直接变成0,所以分母要特别大才能精确除法 */
        t = mul(1, fu)
            .multiply(
                div(h.multiply(-(2 ** 5)), mul(4, x).plus(1))
                    .plus(div(h.multiply(-1), mul(4, x).plus(3)))
                    .plus(div(h.multiply(2 ** 8), mul(10, x).plus(1)))
                    .plus(div(h.multiply(-(2 ** 6)), mul(10, x).plus(3)))
                    .plus(div(h.multiply(-(2 ** 2)), mul(10, x).plus(5)))
                    .plus(div(h.multiply(-(2 ** 2)), mul(10, x).plus(7)))
                    .plus(div(h.multiply(1), mul(10, x).plus(9)))
            )
            .divide(mul(2 ** 6, a));

        p = add(p, t);
        if (abs(t).compare(bigInt(0)) <= 0) break;

        for (var i = 0, len = threadall; i < len; i++) {
            fu = -1 * fu;
            a = mul(a, 1024);
            x = x.plus(1);
        }
    }
    x = x.plus(1);
    return [String(p), String(x)];
}
