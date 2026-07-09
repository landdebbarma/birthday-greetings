$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			 var isMobile = $(window).width() < 768;
			 var spacing = isMobile ? 45 : 100;
			 var offset = isMobile ? 22 : 50;
			 var topPos = isMobile ? 140 : 240;
			$('#b1,#b2,#b3,#b4,#b5').stop();
			$('#b11').animate({top:topPos, left: vw - 2*spacing - offset},500);
			$('#b22').animate({top:topPos, left: vw - spacing - offset},500);
			$('#b33').animate({top:topPos, left: vw - offset},500);
			$('#b44').animate({top:topPos, left: vw + spacing - offset},500);
			$('#b55').animate({top:topPos, left: vw + 2*spacing - offset},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var isMobile = $(window).width() < 768;
		var randleft = ($(window).width() - (isMobile ? 60 : 100)) * Math.random();
		var randtop = ($(window).height() - (isMobile ? 120 : 180)) * Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var isMobile = $(window).width() < 768;
		var randleft = ($(window).width() - (isMobile ? 60 : 100)) * Math.random();
		var randtop = ($(window).height() - (isMobile ? 120 : 180)) * Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var isMobile = $(window).width() < 768;
		var randleft = ($(window).width() - (isMobile ? 60 : 100)) * Math.random();
		var randtop = ($(window).height() - (isMobile ? 120 : 180)) * Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var isMobile = $(window).width() < 768;
		var randleft = ($(window).width() - (isMobile ? 60 : 100)) * Math.random();
		var randtop = ($(window).height() - (isMobile ? 120 : 180)) * Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var isMobile = $(window).width() < 768;
		var randleft = ($(window).width() - (isMobile ? 60 : 100)) * Math.random();
		var randtop = ($(window).height() - (isMobile ? 120 : 180)) * Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b3,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		 var isMobile = $(window).width() < 768;
		 var spacing = isMobile ? 45 : 100;
		 var offset = isMobile ? 22 : 50;
		 var topPos = isMobile ? 140 : 240;

		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b11').animate({top:topPos, left: vw - 2*spacing - offset},500);
		$('#b22').animate({top:topPos, left: vw - spacing - offset},500);
		$('#b33').animate({top:topPos, left: vw - offset},500);
		$('#b44').animate({top:topPos, left: vw + spacing - offset},500);
		$('#b55').animate({top:topPos, left: vw + 2*spacing - offset},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var msgCount = $('.message p').length;
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==msgCount + 1){
					$("p:nth-child("+msgCount+")").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				}
				else{
					msgLoop(i);
				}			
			});
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');