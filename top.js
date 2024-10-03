document.addEventListener("DOMContentLoaded", function () {
    const svgElement = document.querySelector('.');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          svgElement.classList.add('visible'); // クラスを追加してアニメーション開始
        } else {
          svgElement.classList.remove('visible'); // スクロールアウト時にリセットする場合
        }
      });
    });
  
    observer.observe(svgElement);
  });
  