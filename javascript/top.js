// toppage-animation
// 動画の再生終了後にオープニングを非表示にしてメインコンテンツを表示する
const video = document.getElementById('opening-video');
const openingAnimation = document.getElementById('opening-animation');
const mainContent = document.getElementById('main-content');

video.addEventListener('ended', () => {
    openingAnimation.style.display = 'none';  // オープニングアニメーションを非表示
    mainContent.style.display = 'block';      // メインコンテンツを表示
});



// toppage-tenji
let slideIndex1 = 1;
showSlide1(slideIndex1);

// 指定のスライドを表示
function currentSlide1(n) {
  showSlide1(slideIndex1 = n);
}

// 矢印ボタンでスライドを変更
function changeSlide1(n) {
  showSlide1(slideIndex1 += n);
}

// スライドの表示制御
function showSlide1(n) {
  const slides = document.getElementsByClassName("slide1");
  const dots = document.getElementsByClassName("dot1");
  if (n > slides.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
}

// スワイプ操作の設定
let startX1 = 0;
let endX1 = 0;

document.getElementById("slideshow1").addEventListener("touchstart", (e) => {
  startX1 = e.touches[0].clientX;
});

document.getElementById("slideshow1").addEventListener("touchend", (e) => {
  endX1 = e.changedTouches[0].clientX;
  handleSwipe1();
});

function handleSwipe1() {
  if (startX1 - endX1 > 50) {
    changeSlide1(1); // 左スワイプ (次のスライド)
  } else if (endX1 - startX1 > 50) {
    changeSlide1(-1); // 右スワイプ (前のスライド)
  }
}


let slideIndex2 = 1;
showSlide2(slideIndex2);

// 指定のスライドを表示
function currentSlide2(n) {
  showSlide2(slideIndex2 = n);
}

// 矢印ボタンでスライドを変更
function changeSlide2(n) {
  showSlide2(slideIndex2 += n);
}

// スライドの表示制御
function showSlide2(n) {
  const slides = document.getElementsByClassName("slide2");
  const dots = document.getElementsByClassName("dot2");
  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

// スワイプ操作の設定
let startX2 = 0;
let endX2 = 0;

document.getElementById("slideshow2").addEventListener("touchstart", (e) => {
  startX2 = e.touches[0].clientX;
});

document.getElementById("slideshow2").addEventListener("touchend", (e) => {
  endX2 = e.changedTouches[0].clientX;
  handleSwipe2();
});

function handleSwipe2() {
  if (startX2 - endX2 > 50) {
    changeSlide2(1); // 左スワイプ (次のスライド)
  } else if (endX2 - startX2 > 50) {
    changeSlide2(-1); // 右スワイプ (前のスライド)
  }
}




/* toppage-timetable */
$(function() {
    $(".poster1").click(function(){
        location.href='nofilled'
        //nofilledには遷移先のurl
    });
    $(".poster2").click(function(){
        location.href='nofilled'
        //nofilledには遷移先のurl
    });
});
  
