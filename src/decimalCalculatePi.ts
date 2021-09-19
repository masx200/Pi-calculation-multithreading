import Decimal from "decimal.js";
import { myworker } from "./decimal-myworker";

export async function decimalCalculatePi(
    createworker: () => Worker,
    piwei: number,
    threadgeshu: number
): Promise<[string, number]> {
    var p: Decimal,
        x = 0;
    p = new Decimal(0);

    Decimal.set({ precision: piwei });
    // myworker.length = threadgeshu;
    // myworker.fill(undefined);
    //   finishflag = [];
    //  finishflag.length = threadgeshu;
    /* var worker1;
if (typeof worker1 == "undefined") {
worker1 = new Worker("mythread1.js");
}

for (var i = 0, len = threadgeshu; i < len; i++) {
myworker[i] = worker1;
}
*/
    for (var i = 0, len = threadgeshu; i < len; i++) {
        if (myworker.length >= threadgeshu) {
            break;
        } else {
            myworker.push(createworker());
        }
    }
    console.log(myworker);
    await Promise.all(
        myworker.map(function (currentValue, index, arr) {
            // arr[index] = undefined;
            // arr[index] = arr[index] || new Worker("mythread1.js");
            console.log(myworker);
            return new Promise<void>((res, rej) => {
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
                    //   console.log(...event.data);
                    var p1 = new Decimal(event.data[0]);
                    p = Decimal.add(p, p1);
                    x = Math.max(x, parseInt(event.data[1]));
                    //  finishflag[index] = 1;
                    //  threadfinish();
                    res();
                };
                currentValue.onerror = (e) => {
                    console.error("Error:", e.error, e.message);
                    // for (var key in e) {
                    //     console.error(key, e[key])
                    // }
                    // console.error(e)
                    currentValue.terminate();
                    // arr[index] = void 0;
                    rej(new Error(e.error + e.message));
                    // throw e;
                };
                currentValue.postMessage([piwei, threadgeshu, index]);
            });
        })
    );
    let resultpi = p.toString();
    return [resultpi, x];
}
