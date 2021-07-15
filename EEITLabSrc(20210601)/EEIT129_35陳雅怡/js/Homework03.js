const stars = document.querySelector(".rating").children;
let ratingValue;
let index; //目前選到的星星
document.getElementById("rating-value").innerHTML = "請評分";

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseover", function () {
        document.getElementById("rating-value").innerHTML = "正在打分數中..."
        for (let j = 0; j < stars.length; j++) {
            stars[j].src = "Images/chngstar.gif";
            stars[j].src = "Images/star.gif";
        }
        for (let j = 0; j <= i; j++) {
            stars[j].src = "Images/star.gif"; //移除空星星
            stars[j].src = "Images/chngstar.gif" //添加新星星 如果i=j表示選中的
        }
    })

    stars[i].addEventListener("click", function () {
        ratingValue = i + 1
        index = i
        document.getElementById("rating-value").innerHTML = "您的評分為" + ratingValue + "顆星";
    })

    stars[i].addEventListener("mouseout", function () {
        for (let j = 0; j < stars.length; j++) {
            stars[j].src = "Images/chngstar.gif";
            stars[j].src = "Images/star.gif";
        }
        for (let j = 0; j <= index; j++) {
            stars[j].src = "Images/star.gif";
            stars[j].src = "Images/chngstar.gif";
        }
    })
}