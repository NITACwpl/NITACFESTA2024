// toppage-animation
// 動画の再生終了後にオープニングを非表示にしてメインコンテンツを表示する
const video = document.getElementById('opening-video');
const openingAnimation = document.getElementById('opening-animation');
const mainContent = document.getElementById('main-content');

video.addEventListener('ended', () => {
    openingAnimation.style.display = 'none';  // オープニングアニメーションを非表示
    mainContent.style.display = 'block';      // メインコンテンツを表示
});



let slideIndex = 1;
        showSlides(slideIndex);

        // 特定のスライドに移動する関数
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        // スライドを表示する関数
        function showSlides(n) {
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");

            // インデックスが範囲外のときの処理
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}

            // すべてのスライドを非表示
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // すべてのドットのアクティブ状態をリセット
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            // 現在のスライドとドットを表示
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
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
  
