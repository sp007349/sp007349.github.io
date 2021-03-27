$(document).ready(function () {
    var slideShow = $(".slideShow"), //獲取最外層框架的名稱
        ul = slideShow.find("ul"),
        showNumber = slideShow.find(".showNav span"),//獲取按鈕
        oneWidth = slideShow.find(".slideShow2").width(); //獲取每個圖片的寬度
    var timer = null; //定時器返回值，主要用於關閉定時器
    var iNow = 0; //iNow為正在展示的圖片索引值，當使用者開啟網頁時首先顯示第一張圖，即索引值為0
    var iNowRe = 0

    var fun1 = function () {
        if (iNowRe == 0) {
            iNow = iNow + 1;    //讓圖片的索引值次序加1，這樣就可以實現順序輪播圖片
            if (iNow == 4) {
                iNowRe = 1
                iNow = iNow + 1
            }
        }

        if (iNowRe == 1) {
            iNow = iNow - 1;    //讓圖片的索引值次序加1，這樣就可以實現順序輪播圖片
            if (iNow == 0) {
                iNowRe = 0
            }
        }

        if (iNow > showNumber.length - 1) { //當到達最後一張圖的時候，讓iNow賦值為第一張圖的索引值，輪播效果跳轉到第一張圖重新開始
            iNow = 0;
        }
        showNumber.eq(iNow).addClass("active").siblings().removeClass("active"); //按鈕點選時為這個按鈕新增高亮狀態，並且將其他按鈕高亮狀態去掉
        ul.animate({
            "left": -oneWidth * iNow//注意此處用到left屬性，所以ul的樣式裡面需要設定position: relative; 讓ul左移N個圖片大小的寬度，N根據被點選的按鈕索引值iNOWx確定
        }, 1500)
    }

    showNumber.on("click", function () {  //為每個按鈕繫結一個點選事件 
        $(this).addClass("active").siblings().removeClass("active"); //按鈕點選時為這個按鈕新增高亮狀態，並且將其他按鈕高亮狀態去掉
        var index = $(this).index(); //獲取哪個按鈕被點選，也就是找到被點選按鈕的索引值
        iNow = index;
        ul.stop().animate({
            "left": -oneWidth * iNow//注意此處用到left屬性，所以ul的樣式裡面需要設定position: relative; 讓ul左移N個圖片大小的寬度，N根據被點選的按鈕索引值iNOWx確定
        }, 1500)
        clearInterval(timer);
        timer = setInterval(fun1, 6000);
        console.log(timer)
    });

    timer = setInterval(fun1, 5000);
    
    
})