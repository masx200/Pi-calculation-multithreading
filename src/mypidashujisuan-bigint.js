import { bigintCalculatePi } from "./bigintCalculatePi";
import MyWorker from "./mythread1-bigint.js?worker";
(() => {
    window.addEventListener(
        "load",
        () => {
            mytestpi();
        },
        { once: true }
    );
    //使用bigint测试
    //   window.onload = () => {
    //     mytestpi();
    //   };
    // $('window').load(mytestpi)
    // $(document).ready(mytestpi);
    // mytestpi;
    var myptext,
        myshurukuangneirong,
        // p = bigInt(0),
        threadgeshu,
        // x = 0,
        piwei,
        // myworker,
        eventdata,
        strt,
        // finishflag,
        durt,
        testname;
    // myworker = [];
    function lashentextarea(...ids) {
        setTimeout(function () {
            for (let value of ids) {
                var myptext = document.getElementById(value);
                var el = myptext;

                // textarea.scrollHeight = 60
                // textarea.style.height = "60px"
                // makeExpandingArea(textarea);
                if (Math.abs(parseInt(el.style.height) - el.scrollHeight) > 5) {
                    console.log(parseInt(el.style.height), el.scrollHeight);

                    myptext.style.height = myptext.scrollHeight + 2 + "px";

                    console.log(
                        "拉伸文本框",
                        parseInt(el.style.height),
                        el.scrollHeight,
                        myptext.outerHTML
                    );
                }
            }
        }, 0);
    }

    function mytestpi() {
        var mystartid = "#start-big";
        document.querySelector(mystartid).onclick = mystart;
        // $(mystartid).click(mystart);
        getConstpinewhighefficiency105();
    }

    function getConstpinewhighefficiency105() {
        var myeleid3 = "tp-big";
        var myinput1 = document.getElementById("thread-big");
        var myinput2 = document.getElementById("pichangwei-big");
        var mytextarea1 = document.getElementById(myeleid3);
        myinput1.value = 6;
        myinput2.value = 3;
        // jisuanfinishflag = 1;
        threadgeshu = 8;
        // x = 0;
        // piwei = 3000;

        myptext = mytextarea1;
        myshurukuangneirong = " ";
        myshurukuangneirong =
            myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
        var isbigint =
            typeof BigInt === "function"
                ? "你的浏览器能够支持原生BigInt!"
                : "你的浏览器无法支持原生BigInt!";
        console.log(isbigint);
        myshurukuangneirong =
            myshurukuangneirong + isbigint + "\n开始圆周率多线程测试\n";
        myptext.value = myshurukuangneirong;
        // document.getElementById("start").onclick = mystart;
        lashentextarea(myeleid3, "tp2-big");
        // setTimeout(function() {
        //   myptext.style.height = myptext.scrollHeight + "px";
        // }, 0);
    }

    async function mystart() {
        var myinput1 = document.getElementById("thread-big");
        var myinput2 = document.getElementById("pichangwei-big");
        if (
            myinput1.value >= 1 &&
            myinput1.value <= 16 &&
            myinput2.value >= 1 &&
            myinput2.value <= 100
        ) {
            piwei = 1000 * Math.floor(myinput2.value);
            myinput2.value = Math.floor(myinput2.value);
            threadgeshu = Math.floor(myinput1.value);
            myinput1.value = threadgeshu;
            testname = document.title =
                "圆周率计算多线程" +
                "-" +
                "线程数为" +
                threadgeshu +
                "-位数为" +
                piwei;
            myshurukuangneirong =
                myshurukuangneirong + "线程数为" + threadgeshu + " ";
            myptext.value = myshurukuangneirong;
            eventdata =
                "圆周率计算" + piwei + "位 " + "计算圆周率中......" + "  \n";
            // Decimal.precision = piwei
            myshurukuangneirong += String(eventdata);
            myptext.value = myshurukuangneirong;
            console.log(testname);
            console.time(testname);
            strt = new Date().getTime();
            try {
                const [resultpi, x] = await bigintCalculatePi(
                    createworker,
                    piwei,
                    threadgeshu
                );
                threadfinish(resultpi, x);
            } catch (error) {
                document.querySelector("#tp2-big").value =
                    "Error:" + String(error);
                //     "Error:" + e.message;
            }
        } else {
            alert("输入错误");
            myinput2.value = 4;
            myinput1.value = 8;
        }
    }

    function threadfinish(p, x) {
        var myeleid3 = "tp-big";
        var myeleid4 = "tp2-big";
        var mytextarea1 = document.getElementById(myeleid3);
        var mytextarea2 = document.getElementById(myeleid4);
        // if (
        //     threadgeshu ==
        //     finishflag.filter(function (currentValue) {
        //         return currentValue == 1;
        //     }).length
        // ) {
        console.timeEnd(testname);
        var endt = new Date().getTime();
        durt = (endt - strt) / 1000;

        eventdata =
            "计算完成,用时" +
            durt +
            "秒第" +
            x +
            "次 " +
            "圆周率" +
            piwei +
            "位\n";
        // +
        // "  \n" +
        // p +
        // "  \n"

        mytextarea2.value = "圆周率" + piwei + "位" + p;
        var myptext = mytextarea1;
        myshurukuangneirong += String(eventdata);
        myptext.value = myshurukuangneirong;
        // jisuanfinishflag = 1;
        // myworker.forEach(function (currentValue, index, arr) {
        //     arr[index].terminate();
        //     arr[index] = void 0;
        // });
        // x = 0;
        //alert("ok")
        setTimeout(function () {
            // myptext.style.height = myptext.scrollHeight + "px";
            lashentextarea(myeleid3, myeleid4);
        }, 0);
        document.body.onmousemove =
            document.body.onmouseover =
            document.body.onmousewheel =
            document.body.onscroll =
            document.body.onmousedown =
                null;
        // }
    }
})();
function createworker() {
    return new MyWorker(/* new URL("mythread1-bigint.js", import.meta.url), {
        type: "module",
    } */);
}
