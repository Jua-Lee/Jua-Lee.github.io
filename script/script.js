$(document).ready(function(){

	//글자 타이핑효과
	var typingBool = false; 
	var typingIdx=0; 
	
	// 타이핑될 텍스트를 가져온다 
	var typingTxt = $(".typing-txt").text(); 
	
	typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
	
	if(typingBool==false){ 
		// 타이핑이 진행되지 않았다면 
		 typingBool=true;     
		 var tyInt = setInterval(typing,100); // 반복동작 
	};
			 
	function typing(){ 
		if(typingIdx<typingTxt.length){ 
			// 타이핑될 텍스트 길이만큼 반복 
			$(".typing").append(typingTxt[typingIdx]);
			// 한글자씩 이어준다. 
			typingIdx++; 
		 } else{ 
			 //끝나면 반복종료 
			clearInterval(tyInt); 
		 } 
	};

	// portfolio num 

	$(function(){
    var sec5Img = [];
    var sec5Top = [];
    var sec5ImgLen = $('#portfolio .project').length;

    var scrollTop;
    var sec5Top;

    $(window).load(function(){
        for (var i = 0; i < sec5ImgLen; i++) {
            sec5Img[i] = $('#portfolio .project').eq(i);
            sec5Top[i] = $('#portfolio .project').eq(i).offset().top;
        }

    }).scroll(function(){
        scrollTop = $(this).scrollTop();
        var viewGuide = scrollTop+$(window).height()/2;

        for (var i = 0; i < sec5ImgLen; i++) {
            if(viewGuide > sec5Top[i]){ sec5Img[i].addClass('active'); }
						else{
							sec5Img[i].removeClass('active'); 
						}
      	}

    });
	});

}); //ready end