console.log('\'Allo \'Allo!');

var scroller	= $('ul.nav a');

$('.navbar a').click(function(e) {
	e.preventDefault;
	var whereTo = $(this).data('whereto')
	$.scrollTo( whereTo, 1000 )
});

$('main a').click(function(e) {
	e.preventDefault;
	var whereTo = $(this).attr('href');
	if ( whereTo == '#ref-1' || whereTo == '#ref-2' || whereTo == '#ref-3' ) {
		$.scrollTo( whereTo, 1000, { offset : -60 } )
	}
	else {
		$.scrollTo( whereTo, 1000 )
	}
});

