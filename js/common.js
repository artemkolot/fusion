$(function() {

//jQuery.scrollSpeed(100, 800);
	// Custom JS

 $('#form input').change(function(event) {
 	if ($(this).val()!="") {
 		$(this).siblings().addClass('actived');
 		$(this).addClass('actived');
 	} else{
 		$(this).siblings().removeClass('actived');
 		$(this).removeClass('actived');
 	}
 });

$(".btn").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
});

$(".team-item").click(function(event) {
	$(".team-item").removeClass('active');
	$(this).addClass('active');
});

$(".testimonials-pagination a").on('click', function(event) {
	event.preventDefault();
	//alert("hi");
});



$(".arrow").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });


});


		