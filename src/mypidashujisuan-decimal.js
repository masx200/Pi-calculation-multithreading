import { decimalCalculatePi } from "./decimalCalculatePi";
import MyWorker from "./mythread1-decimal.js?worker";

(() => {
    window.addEventListener(
        "load",
        () => {
            mytestpi();
        },
        { once: true }
    );
    //   window.onload = () => {
    //     mytestpi();
    //   };
    // $('window').load(mytestpi)
    // $(document).ready(mytestpi);
    // mytestpi;
    var myptext,
        myshurukuangneirong,
        // p = Decimal(0),
        threadgeshu,
        // x = 0,
        piwei,
        // myworker,
        eventdata,
        strt,
        //  finishflag,
        durt,
        testname;

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
                    // console.log("拉伸文本框", myptext.outerHTML)
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
        document.getElementById("start").onclick = mystart;
        // $("#start").click(mystart);
        getConstpinewhighefficiency105();
    }

    function getConstpinewhighefficiency105() {
        document.getElementById("thread").value = 6;
        document.getElementById("pichangwei").value = 3;
        // jisuanfinishflag = 1;
        threadgeshu = 8;
        // x = 0;
        // piwei = 3000;

        myptext = document.getElementById("tp");
        myshurukuangneirong = " ";
        myshurukuangneirong =
            myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
        myshurukuangneirong = myshurukuangneirong + "开始圆周率多线程测试\n";
        myptext.value = myshurukuangneirong;
        // document.getElementById("start").onclick = mystart;
        lashentextarea("tp", "tp2");
        // setTimeout(function() {
        //   myptext.style.height = myptext.scrollHeight + "px";
        // }, 0);
    }

    async function mystart() {
        // jisuanfinishflag = 0;

        if (
            document.getElementById("thread").value >= 1 &&
            document.getElementById("thread").value <= 16 &&
            document.getElementById("pichangwei").value >= 1 &&
            document.getElementById("pichangwei").value <= 100
        ) {
            piwei =
                1000 * Math.floor(document.getElementById("pichangwei").value);
            document.getElementById("pichangwei").value = Math.floor(
                document.getElementById("pichangwei").value
            );
            threadgeshu = Math.floor(document.getElementById("thread").value);
            document.getElementById("thread").value = threadgeshu;
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

            myshurukuangneirong += String(eventdata);
            myptext.value = myshurukuangneirong;

            console.log(testname);
            console.time(testname);
            strt = new Date().getTime();
            // p = new Decimal(0);

            try {
                const [resultpi, x] = await decimalCalculatePi(
                    createworker,
                    piwei,
                    threadgeshu
                );
                threadfinish(resultpi, x);
            } catch (error) {
                document.getElementById("tp2").value = "Error:" + String(error);
            }
        } else {
            alert("输入错误");
            document.getElementById("pichangwei").value = 4;
            document.getElementById("thread").value = 8;
        }
    }

    function threadfinish(p, x) {
        //     if (
        //         true
        //         /*threadgeshu ==
        //   finishflag.filter(function(currentValue) {
        //     return currentValue == 1;
        //   }).length*/
        //     ) {
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
        document.getElementById("tp2").value =
            "圆周率" + piwei + "位" + p.toString();
        myptext = document.getElementById("tp");
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
            lashentextarea("tp", "tp2");
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
    return new MyWorker(/* new URL("mythread1.js", import.meta.url), {
        type: "module",
    } */);
}
