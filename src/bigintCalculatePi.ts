import bigInt from "big-integer";
import { myworker } from "./bigint-myworker";
import { add } from "./bigintextend";

export async function bigintCalculatePi(
    createworker: () => Worker,
    piwei: number,
    threadgeshu: number
): Promise<[string, number]> {
    var p: bigInt.BigInteger,
        x = 0;

    p = bigInt(0);

    // myworker.length = threadgeshu;

    for (var i = 0, len = threadgeshu; i < len; i++) {
        /* myworker[i] = myworker[i] || */
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
            // arr[index] = arr[index] || new Worker("mythread1-bigint.js");
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

                    var p1 = bigInt(event.data[0]);

                    p = add(p, p1);
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
                    // arr[index] = void 0;
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
