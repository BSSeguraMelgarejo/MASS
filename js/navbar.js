$(function(){

	var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       console.log("scroll abajo");
		       /*$('.nav-area').animate({top:"-71px"},500);*/
		       //desaparece

		       $('.nav-area').addClass('animate');
				$('nav-area').addClass('sticky');
		   } else {
		      console.log("scroll arriba");
		      /*$('.nav-area').animate({top:"0px"},500);*/

		      $('.nav-area').removeClass('animate');
				$('.nav-area').removeClass('sticky');
		      //aparece

		   }
		   lastScrollTop = st;
		});

	var burguerActive = 2;

	$(".hamburguesa").on({
	  click: function(){
	  	if(burguerActive%2==0){
	  		
			 $('.nav-area').addClass('heigth');
			 $(".nav-responsive").fadeIn("slow");
			

	  	}else{
	  		$(".nav-responsive").fadeOut("slow");
	  		$('.nav-area').removeClass('heigth');
	  	}
	    burguerActive++;
	  }
	});	

});