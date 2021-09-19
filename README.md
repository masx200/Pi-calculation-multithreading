# Pi-calculation-multithreading

Pi calculation, multithreading, based on large number frames decimal.js and webworker

圆周率计算，多线程，基于大数框架 decimal.js 和 webworker

圆周率计算-可设置圆周率位数-可选择线程个数-多线程大数框架 webworker 输出 useragent 大数框架

# 圆周率计算多线程,使用 BigInteger.js 和浏览器原生的 BigInt 之后速度得到巨大提升!

需要浏览器 chrome68 以上,才原生支持 BigInt

<h3>BigInteger.js</h3>
<p>
  BigInteger.js是Javascript的任意长度整数库，允许对无限大小的整数进行算术运算，尽管存在内存和时间限制。
  更新（2018年12月2日）：BigInt被添加为JavaScript的本机功能。
  此库现在可用作polyfill：如果环境支持本机BigInt，则此库充当本机实现的瘦包装器。
  建议升级浏览器到chrome68以上,才可支持原生BigInt.
<b>如果浏览器原生支持BigInt,则运行速度有巨大提升!</b>
</p>

<h3>计算运行速度排行:</h3>
<br />1.原生BigInt最快,<br />2.BigInteger.js中速,<br />3.Decimal.js最慢。
<hr>
<br />
<h4> 线程数为4 圆周率计算6000位测试结果</h4>
<br />
firefox 66 测试 decimal.js 达到1倍速度
<br />
firefox 66 测试 BigInteger.js 达到2.163倍速度
<br />
chrome 75 测试 decimal.js 达到3.4375倍速度
<br />
chrome 75 测试 原生BigInt 达到74.038倍速度
<p></p>
<hr>
<h4> 线程数为4 圆周率计算10000位测试结果</h4>
<br />
firefox 66 测试 decimal.js 达到1倍速度
<br />
firefox 66 测试 BigInteger.js 达到2.066倍速度
<br />
chrome 75 测试 decimal.js 达到3.688倍速度
<br />
chrome 75 测试 原生BigInt 达到100.773倍速度
<p></p>
<hr>

可以测试浏览器的 JavaScript 运行引擎速度

建议在最新版本的 chrome 或者 Firefox 或者 safari 中运行，否则速度可能特别慢

```
UserAgent: Mozilla/5.0 (Linux; Android 9; MHA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36
开始圆周率多线程测试
线程数为 8
圆周率计算 1000 位
计算圆周率中......
计算完成,用时 1.476 秒第 340 次
圆周率 1000 位
```

[查看算法](src/pi_calc.AsciiMath)

# 在线演示

https://pi-calculation-multithreading.pages.dev/
