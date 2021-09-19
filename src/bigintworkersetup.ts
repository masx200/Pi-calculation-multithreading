//@ts-ignore
import { bigintchildwork } from "./bigintchildwork";

export function bigintworkersetup() {
    (() => {
        //使用bigint测试
        // importScripts(
        //     "https://cdn.staticfile.org/big-integer/1.6.43/BigInteger.min.js"
        //     // ()=>{
        //     // console.log("加载完成")}
        // );
        //   console.log(bigInt)
        // importScripts("./decimal.min.js");
        // nabs.cmp=(m)=> nabs.compareAbs(m);
        /**
       *
       * https://github.com/peterolson/BigInteger.js
       *
       * BigInteger.js Build Status Coverage Status Monthly Downloads
    BigInteger.js is an arbitrary-length integer library for Javascript, allowing arithmetic operations on integers of unlimited size, notwithstanding memory and time limitations.
    
    Update (December 2, 2018): BigInt is being added as a native feature of JavaScript. This library now works as a polyfill: if the environment supports the native BigInt, this library acts as a thin wrapper over the native implementation.
    
    BigInteger.js构建状态覆盖状态每月下载
    BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。
    
    更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。 此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
    */
        // setTimeout(mycalc,0)
        // function mycalc(){
        addEventListener("message", function (event) {
            // bigInt.cmp=bigInt.prototype.cmp=(n)=>;
            var piwei;
            piwei = event.data[0];
            // piwei /= 2;
            var threadall = event.data[1];
            var threadid = event.data[2];
            // console.log(
            //   "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n",
            //   ...event.data
            // );
            console.log(
                "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n"
            );
            console.log(...event.data);

            // Decimal.precision = piwei + 1;
            // console.log("t", t.toString())
            // console.log("p", p.toString())
            const [p, x] = bigintchildwork(piwei, threadall, threadid);
            postMessage([p, x]);
        });
    })();
}
