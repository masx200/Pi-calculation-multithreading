(() => {
importScripts("https://cdn.staticfile.org/decimal.js/10.1.1/decimal.min.js");
// importScripts("./decimal.min.js");
var piwei;
addEventListener('message', function(event) {
	piwei = event.data[0];
var	threadall = event.data[1];
var	threadid = event.data[2];
	console.log("副线程" + (threadid + 1) + "从主线程接收" + "event.data\n" + event.data);

	Decimal.precision = piwei + 1;
	var p = new Decimal(0);
	var a = new Decimal(1);
	var h = 1;
	var x = new Decimal(0);
	var fu = 1;
	var t = new Decimal(1);
	for (var i = 0, len = threadid; i < len; i++) {
		fu = -1 * fu;
		a = Decimal.mul(a, 1024);
		x = x.plus(1);
	}
	while (Decimal.abs(t).cmp(new Decimal("1e-" + (1 + piwei))) != -1) {
		t = Decimal.mul(h, fu).div(Decimal.mul((2 ** 6), a)).mul((Decimal.div((-(2 ** 5)), (Decimal.mul(4, x).plus(1)))).plus(
				Decimal.div((-1), (Decimal.mul(4, x).plus(3)))).plus(Decimal.div((2 ** 8), (Decimal.mul(10, x).plus(1)))).plus(
				Decimal.div((-(2 ** 6)), (Decimal.mul(10, x).plus(3)))).plus(Decimal.div((-(2 ** 2)), (Decimal.mul(10, x).plus(5))))
			.plus(Decimal.div((-(2 ** 2)), (Decimal.mul(10, x).plus(7)))).plus(Decimal.div((1), (Decimal.mul(10, x).plus(9))))
		);

		p = Decimal.add(p, t);
		if (Decimal.abs(t).cmp(new Decimal("1e-" + (1 + piwei))) == -1)
			break;

		for (var i = 0, len = threadall; i < len; i++) {
			fu = -1 * fu;
			a = Decimal.mul(a, 1024);
			x = x.plus(1);
		}

	}
	postMessage(["" + p, "" + x.plus(1)]);

})
})()