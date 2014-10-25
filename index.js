$(document).ready(function() {

var mobileView = false;

//detect if mobile version is being shown
if ($('video').css('display') == "none") {
	mobileView = true;
} else {
	mobileView = false;
}


//detect window scroll
$(window).scroll(function() {

	//determine percentage value of top 
	var s = $(window).scrollTop(),
		c = $(window).height();
		scrollPercentTop = (s / c) * 100;

	/*---- SHOW OR HIDE SECOND NAVIGATION BAR ----*/ 
		//if percentage value of top is 100, show the second navbar
		if (scrollPercentTop >= '100' && !mobileView) {
			$('#navbar2').css('display', 'block');
		}
		else {
			$('#navbar2').css('display', 'none');
		}

	/*---- SHOW WHERE USER IS ON NAVIGATION BAR ----*/ 
		//if user is viewing area below main page
		if (scrollPercentTop >= '100' && scrollPercentTop <= '150') {
			$('.aboutlink').children('p').css('border-bottom', '2px solid #199FF2');
			$('.learnlink').children('p').css('border-bottom', 'none');
			$('.campaignlink').children('p').css('border-bottom', 'none');
			$('.schedulelink').children('p').css('border-bottom', 'none');
			$('.sharelink').children('p').css('border-bottom', 'none');
		} else if (scrollPercentTop > '150' && scrollPercentTop <= '250') {
			$('.aboutlink').children('p').css('border-bottom', 'none');
			$('.learnlink').children('p').css('border-bottom', '2px solid #D6FA66');
			$('.campaignlink').children('p').css('border-bottom', 'none');
			$('.schedulelink').children('p').css('border-bottom', 'none');
			$('.sharelink').children('p').css('border-bottom', 'none');
		} else if (scrollPercentTop > '250' && scrollPercentTop <= '350') {
			$('.aboutlink').children('p').css('border-bottom', 'none');
			$('.learnlink').children('p').css('border-bottom', 'none');
			$('.campaignlink').children('p').css('border-bottom', '2px solid #FCFCFF');
			$('.schedulelink').children('p').css('border-bottom', 'none');
			$('.sharelink').children('p').css('border-bottom', 'none');
		} else if (scrollPercentTop > '350' && scrollPercentTop <= '450') {
			$('.aboutlink').children('p').css('border-bottom', 'none');
			$('.learnlink').children('p').css('border-bottom', 'none');
			$('.campaignlink').children('p').css('border-bottom', 'none');
			$('.schedulelink').children('p').css('border-bottom', '2px solid #458164');
			$('.sharelink').children('p').css('border-bottom', 'none');
		} else if (scrollPercentTop > '450' && scrollPercentTop <= '500') {
			$('.aboutlink').children('p').css('border-bottom', 'none');
			$('.learnlink').children('p').css('border-bottom', 'none');
			$('.campaignlink').children('p').css('border-bottom', 'none');
			$('.schedulelink').children('p').css('border-bottom', 'none');
			$('.sharelink').children('p').css('border-bottom', '2px solid #0B4366');
		}
		//if user is not viewing area below main page, no border-bottoms
		else if (scrollPercentTop < '100') {
			$('.aboutlink').children('p').css('border-bottom', 'none');
			$('.learnlink').children('p').css('border-bottom', 'none');
			$('.campaignlink').children('p').css('border-bottom', 'none');
			$('.schedulelink').children('p').css('border-bottom', 'none');
			$('.sharelink').children('p').css('border-bottom', 'none');
		}
});


/*---- ALLOW USER TO MOVE ON PAGE WITH NAVIGATION BAR ----*/
function goToByScroll(myClass){
	// Remove "link" from the ID
	myClass = myClass.replace("link", "");
	// Scroll
	$('html,body').animate({
		scrollTop: $("#"+myClass).offset().top,
	}, 'slow');
}
$(".navbar a").click(function(e) { 
	// Prevent a page reload when a link is pressed
	e.preventDefault(); 
	// Call the scroll function
	goToByScroll($(this).attr("class"));

});

/*---- CLOSE LIGHTBOX FOR GOOGLE MAPS ----*/
$('#closelightbox').click(function() {
	$('#learnpopup').css('display', 'none');
	$('#learnpopupback').css('display', 'none');
});
$('#learnpopupback').click(function() {
	$('#learnpopup').css('display', 'none');
	$('#learnpopupback').css('display', 'none');
});

/*---- HIDE/SHOW MORE EARTH MONTH EVENTS FOR MOBILE USERS ----*/
$('#sm1').click(function() {
	$('#sm1').css('display', 'none');
	$('#smh1').css('display', 'block');
	$('#sm2').css('display', 'block');
})
$('#sm2').click(function() {
	$('#sm2').css('display', 'none');
	$('#smh2').css('display', 'block');
	$('#sm3').css('display', 'block');
})
$('#sm3').click(function() {
	$('#sm3').css('display', 'none');
	$('#smh3').css('display', 'block');
})


});

