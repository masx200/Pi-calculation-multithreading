import bigInt from "big-integer";
import { myworker } from "./mypidashujisuan-bigint";

export async function bigintCalculatePi(createworker, piwei, threadgeshu) {
    var p,
        x = 0;
    bigInt.abs = (n) => bigInt(n).abs();

    bigInt.mul = (n, m) => bigInt(n).multiply(m);

    bigInt.div = (n, m) => bigInt(n).divide(m);
    bigInt.add = (n, m) => bigInt(n).add(m);
    bigInt().__proto__.cmp = bigInt().__proto__.compare;
    bigInt().__proto__.div = bigInt().__proto__.divide;
    bigInt().__proto__.mul = bigInt().__proto__.multiply;
    bigInt("90071992547409920").__proto__.cmp =
        bigInt("90071992547409920").__proto__.compare;
    bigInt("90071992547409920").__proto__.div =
        bigInt("90071992547409920").__proto__.divide;
    bigInt("90071992547409920").__proto__.mul =
        bigInt("90071992547409920").__proto__.multiply;
    p = new bigInt(0);

    // myworker = [];
    myworker.length = threadgeshu;
    // myworker.fill(undefined)
    // finishflag = [];
    // finishflag.length = threadgeshu;
    // var worker1;
    // if (typeof worker1 == "undefined") {
    //     worker1 = new Worker("mythread1-bigint.js");
    // }
    for (var i = 0, len = threadgeshu; i < len; i++) {
        myworker[i] = myworker[i] || createworker();
    }
    console.log(myworker);
    await Promise.all(
        myworker.map(function (currentValue, index, arr) {
            // arr[index] = undefined;
            // arr[index] = arr[index] || new Worker("mythread1-bigint.js");
            return new Promise((res, rej) => {
                currentValue.onmessage = function (event) {
                    console.log(
                        "主线程从副线程" + (index + 1) + "接收" + "event.data\n"
                    );
                    console.log(
                        "第一个参数",
                        event.data[0],
                        "\n第二个参数",
                        event.data[1]
                    );

                    var p1 = new bigInt(event.data[0]);
                    p = bigInt.add(p, p1);
                    x = Math.max(x, parseInt(event.data[1]));
                    res();
                    // finishflag[index] = 1;
                    // threadfinish();
                };
                currentValue.onerror = (e) => {
                    // for (var key in e) {
                    //     console.error(key, e[key])
                    // }
                    // console.error(e.message)
                    console.error("Error:", e.error, e.message);
                    currentValue.terminate();
                    arr[index] = void 0;
                    // document.querySelector("#tp2-big").value =
                    //     "Error:" + e.message;
                    rej(new Error(e.error + e.message));
                    //   throw e;
                };
                currentValue.postMessage([piwei, threadgeshu, index]);
            });
        })
    );
    let resultpi = p.toString()[0] + "." + p.toString().slice(1);
    return [resultpi, x];
}
