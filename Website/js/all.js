$(".close-button").click(function(){

	$('.detail').hide();
	console.log('close');
  $("body").css('overflow','auto');

});

$(".image-box").click(function(){

	console.log("clicked: " + $(this).attr('id'));

	var id = $(this).attr('id');	
	$("#content-" + id).show();


  $("body").css('overflow','hidden');

});
 

$(document).scroll(function () {
    var y = $(this).scrollTop();
    //var navWrap = (y > 50);


    if (y > 500) {
      
    if ( !$(".name").is(':animated') )
      {
        $(".name").animate({left:'1140px'}) 
      }  

  } else  {

      if( !$(".name").is(':animated') )
        {
        $(".name").animate({left:'20px'})        
        }



     
      }
console.log(y)


});




