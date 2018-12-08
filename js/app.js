
console.log('Made with Code!');
$(document).ready(function () {

	// Last view
	function lastView(e) {
		var get_section = $('.contentProfile > .section');
		var get_content = $('.contentProfile').find(e);
		var get_menu_mobile = $('#slide-out > li');
		var get_menu_desktop = $('#slide-outs > li');

		get_menu_mobile.removeClass('active-nav');
		get_menu_mobile.find('a').attr('href', e).addClass('active-nav');

		get_menu_desktop.removeClass('active-nav');

		var current_item_menu = get_menu_desktop.find('a[href*="' + e + '"]');

		$(current_item_menu).parent().addClass('active-nav');

		get_section.fadeOut('fast');
		get_content.fadeIn('fast');
		// window.scrollTop;

	}

	// Check Page
	// -------------

	var url = window.location;
	var url_hash = window.location.hash;

	if (url + '#aboutMe' == url + url_hash) {
		// alert('hey estas en aboutme!');
	}

	switch (url_hash) {
		case "#home":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#aboutMe":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#services":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#experience":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#budget":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#portfolio":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		case "#blog":
			// alert('hey estamos en' + url_hash);
			lastView(url_hash);
			break;
		default:
		// alert('hey estamos en el home');

	}

	// Change view

	function changeView(e) {
		var get_hash = $(e).children('a').attr('href');
		var get_section = $('.contentProfile > .section');
		var get_content = $('.contentProfile').find(get_hash);

		$(e).parents().find('li').removeClass('active-nav');
		$(e).addClass('active-nav');
		get_section.fadeOut('fast');
		get_content.fadeIn('fast');
		// window.scrollTop;
	}

	// Menu 
	// --------------

	$('#slide-out > li').click(function (event) {
		/* Act on the event */
		changeView(this);
	});

	$('#slide-outs > li').click(function (event) {
		/* Act on the event */
		changeView(this);
	});

	$('.button-collapse-mobile').sideNav({
		menuWidth: 250, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens,
	});

	$('.button-collapse').sideNav({
		menuWidth: 200, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: false // Choose whether you can drag to open on touch screens,
	});

	$('.modal').modal();

	//Modal Budget

	$('.budgetOk').click(function (event) {
		/* Act on the event */
		window.location.href = 'https://edgardo.tupino.com/presupuesto';
	});

	$('.budgetReturn').click(function (event) {
		/* Act on the event */
		window.location.href = window.location.pathname;
	});

	$('.blogOk').click(function (event) {
		/* Act on the event */
		window.location.href = window.location.pathname;
	});
});