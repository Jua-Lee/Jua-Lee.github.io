$(document).ready(function(){

  // top버튼
  //보이기 / 숨기기
  $(window).scroll(function(){
    if ($(this).scrollTop() > 250){
      $('.btn_top').fadeIn();
    } else {
      $('.btn_top').fadeOut();
    }
  });
  //버튼 클릭시
  $('.btn_top').click(function(){
    $('html, body').animate({
      scrollTop : 0
    }, 400);
    return false;
  });


}); //ready end