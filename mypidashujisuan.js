onload = mytestpi;

function mytestpi() {

	getConstpinewhighefficiency105()
};

function getConstpinewhighefficiency105() {
	document.getElementById("thread").value = 8
	document.getElementById("pichangwei").value = 3
	jisuanfinishflag = 1;
	threadgeshu = 8
	x = 0;
	piwei = 3000;
	myptext = document.getElementById("tp");
	myshurukuangneirong = " ";
	myshurukuangneirong = myshurukuangneirong + "UserAgent: " + navigator.userAgent + "\n";
	myshurukuangneirong = myshurukuangneirong + "开始圆周率多线程测试\n";
	myptext.value = myshurukuangneirong;
	document.getElementById("start").onclick = mystart;
    setTimeout(function() {
        myptext.style.height = myptext.scrollHeight + 'px';
    }, 0);
}

function mystart() {

	jisuanfinishflag = 0;

	if (document.getElementById("thread").value >= 1 && document.getElementById("thread").value <= 12 && document.getElementById(
			"pichangwei").value >= 1 && document.getElementById("pichangwei").value <= 100) {
		piwei = 1000 * Math.floor(document.getElementById("pichangwei").value);
		document.getElementById("pichangwei").value = Math.floor(document.getElementById("pichangwei").value)
		threadgeshu = Math.floor(document.getElementById("thread").value)
		document.getElementById("thread").value = threadgeshu
		document.title ='圆周率计算多线程' + "-" + "线程数为" + threadgeshu
		myshurukuangneirong = myshurukuangneirong + "线程数为" + threadgeshu + "\n";
		myptext.value = myshurukuangneirong;
		eventdata = "圆周率计算" + piwei + "位" + "  \n" + "计算圆周率中......" + "  \n";

		myshurukuangneirong += String(eventdata);
		myptext.value = myshurukuangneirong;
		Decimal.precision = piwei;

		strt = new Date().getTime();
		p = new Decimal(0);

		myworker = []
		myworker.length = threadgeshu;

		finishflag = []
		finishflag.length = threadgeshu;
		var worker1;
		if (typeof(worker1) == "undefined") {
			worker1 = new Worker("mythread1.js")
		}

		for (var i = 0, len = threadgeshu; i < len; i++) {
			myworker[i] = worker1;
		}

		myworker.forEach(function(currentValue, index, arr) {

			arr[index] = undefined;

			arr[index] = new Worker("mythread1.js")
			arr[index].postMessage([piwei, threadgeshu, index]);
			arr[index].onmessage = function(event) {
				console.log("主线程从副线程" + (index + 1) + "接收" + "event.data\n" + event.data);
				var p1 = new Decimal(event.data[0]);
				p = Decimal.add(p, p1);
				x = Math.max(x, parseInt(event.data[1]))
				finishflag[index] = 1;
				threadfinish()
			};

		});

	} else {
		alert("输入错误")
		document.getElementById("pichangwei").value = null
		document.getElementById("thread").value = null
	}

}

function threadfinish() {

	if (threadgeshu == finishflag.filter(function(currentValue) {
			return currentValue == 1;

		}).length) {
		endt = new Date().getTime();
		durt = (endt - strt) / 1000;

		eventdata = "计算完成,用时" + durt + "秒第" + x + "次  \n" + "圆周率" + piwei + "位" + "  \n" + p + "  \n";
		myptext = document.getElementById("tp");
		myshurukuangneirong += String(eventdata);
		myptext.value = myshurukuangneirong;
		jisuanfinishflag = 1;
		myworker.forEach(function(currentValue, index, arr) {
			arr[index].terminate()
		})
		x = 0
		//alert("ok")
		setTimeout(function() {
			myptext.style.height = myptext.scrollHeight + 'px';
		}, 0);

	}
}