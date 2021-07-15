window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index1 = 1;
    var timer;

    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //無限循環
        if (newLeft > -400) {
            list.style.left = -2000 + 'px';
        }
        if (newLeft < -2000) {
            list.style.left = -400 + 'px';
        }
    }
    //定時器
    function play() { 
        timer = setInterval( function(){ next.onclick(); }, 2000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        //前圓點清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        buttons[index1 - 1].className = "on";
    }

    prev.onclick = function () {
        index1 -= 1;
        if (index1 < 1) {
            index1 = 5
        }
        buttonsShow();
        animate(600);
    };

    next.onclick = function () {
        index1 += 1;
        if (index1 > 5) {
            index1 = 1
        }
        animate(-400);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        (function (i) {
            buttons[i].onclick = function () {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 400 * (index1 - clickIndex); //目前圖片停留的index
                animate(offset);
                index1 = clickIndex; //點擊位置圓点顯示
                buttonsShow();
            }
        })(i)
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();
}