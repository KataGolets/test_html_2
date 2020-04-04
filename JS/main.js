$(document).ready (function () {
	
	$('a.content__btn').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		return false;				
	});	
    $('a.close').click(function () {
    $(this).parent().fadeOut(100);
    return false;
    });
});