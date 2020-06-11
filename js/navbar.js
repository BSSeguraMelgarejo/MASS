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
	  		

	  		/* -ms-transform: translate(50px,100px); 
 			transform: translate(50px,100px); */
 			/*$(".nav-responsive").animate({-webkit-transform: "translate(0,0)"},1000);*/
 			/*$('.nav-responsive').animate({transform: 'translateX(-50px)'});*/
			/*$(".nav-responsive").css("display","grid");*/
			/*$('nav-responsive').removeClass('nav-responsive-out');*/
			 $('.nav-responsive').addClass('in');
			 $('.nav-area').addClass('heigth');
			

	  	}else{
	  		/*$(".nav-responsive").css("display", "none");*/
	  		$('.nav-responsive').removeClass('in');
	  		$('.nav-area').removeClass('heigth');
			/*$('nav-responsive').addClass('nav-responsive-out');*/
	  	}
	    burguerActive++;
	  }
	});	

});