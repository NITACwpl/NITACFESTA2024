$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
      $(".circle1").toggleClass('circleactive');
      $(".circle2").toggleClass('circleactive');
      $(".circle3").toggleClass('circleactive');
      $(".circle4").toggleClass('circleactive');
  });
  
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
      $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
      $(".circle1").removeClass('circleactive');
      $(".circle2").removeClass('circleactive');
      $(".circle3").removeClass('circleactive');
      $(".circle4").removeClass('circleactive');
  });
  
  
  $("#acd-label1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');
    $("#triangle1").toggleClass('triactive');
    $(".acd-content1").toggleClass('acd1active');
  });
  
  $(".acd-content1 p").click(function(){
    $(".acd-content1").removeClass('acd1active');
  });
  
  $("#acd-label2").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');
    $("#triangle2").toggleClass('triactive');
    $(".acd-content2").toggleClass('acd2active');//たたんでいるやつ表示
  });
  
  $(".acd-content2 p").click(function(){
    $(".acd-content2").removeClass('acd2active');//たたんでいるやつ非表示
  });
  
  $("#acd-label3").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');
    $("#triangle3").toggleClass('triactive');
    $(".acd-content3").toggleClass('acd3active');
  });
  
  $(".acd-content3 p").click(function(){
    $(".acd-content3").removeClass('acd3active');
  });