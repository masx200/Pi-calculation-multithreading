(() => {
function makeExpandingArea(el) {
  	var timer = null;
  	//由于ie8有溢出堆栈问题，故调整了这里
  	var setStyle = function(el, auto) {
  		if (auto) el.style.height = 'auto';
  		el.style.height = el.scrollHeight +5+ 'px';
  	}
  	var delayedResize = function(el) {
  		if (timer) {
  			clearTimeout(timer);
  			timer = null;
  		}
  		timer = setTimeout(function() {
  			setStyle(el)
  		}, 200);
  	}
  	if (el.addEventListener) {
  		el.addEventListener('input', function() {
  			setStyle(el, 1);
  		}, false);
  		setStyle(el)
  	} else if (el.attachEvent) {
  		el.attachEvent('onpropertychange', function() {
  			setStyle(el)
  		})
  		setStyle(el)
  	}
  	if (window.VBArray && window.addEventListener) { //IE9
  		el.attachEvent("onkeydown", function() {
  			var key = window.event.keyCode;
  			if (key == 8 || key == 46) delayedResize(el);

  		});
  		el.attachEvent("oncut", function() {
  			delayedResize(el);
  		}); //处理粘贴


  	}
  	document.body.onmousemove = function() {
  		delayedResize(el);
  	}
  	document.body.onmouseover = function() {
  		delayedResize(el);
  	}
  	document.body.onmousewheel = function() {
  		delayedResize(el);
  	}
  	document.body.onscroll = function() {
  		delayedResize(el);
  	}
  	document.body.onmousedown = function() {
  		delayedResize(el);
  	}
  	el.onchange = function() {
  		delayedResize(el);
  	}
  }

//   var textarea = document.getElementById('tp');
//   textarea.scrollHeight = 60
//   textarea.style.height = "60px"
//   makeExpandingArea(textarea);
setmytextareinit("tp","tp2")
function setmytextareinit(...id){
    for(value of id){
        var textarea = document.getElementById(value);
        textarea.scrollHeight = 60
        textarea.style.height = "60px"
        makeExpandingArea(textarea);
    }
    
}
})();