$(function() {
  $.smoothPageScrollByLoaded();
  $('a[href^="#"]').smoothPageScroll();

	var positionTop = $(document).width()/2 + $(window).width()/2,
		positionLeft = $(document).height()/2 + $(window).height()/2;

	$('li.sp').smoothPageScroll({
		speed : 1000,
		target: '#' + positionTop + ',' + positionLeft
	});


	window.onresize = function() {
		var positionTop = $(document).width()/2 - $(window).width()/2,
			positionLeft = $(document).height()/2 - $(window).height()/2;
		$('li.sp').smoothPageScroll({
			easing : 'easeOutQuart',
			speed : 1000,
			target: '#' + positionTop + ',' + positionLeft
		});
	};

	$('li.func').smoothPageScroll({
		easing: 'easeOutQuart',
		speed: 1000,
		target: $('body'),
		complate: function(e) {
			alert("scroll complate! and and Scroll '#num02'");
			console.log(e);
			$.smoothPageScrollStart({target: '#num02'});
		}
	});

	// Change Easing
	$('#changeEasing').change(function(){
		$('li.sp').smoothPageScroll({
			easing: this.value,
			speed: parseInt($("#duration").val()),
			target: '#' + positionTop + ',' + positionLeft
		});
		$("a[href*='#']").smoothPageScroll({
			easing: this.value,
			speed: parseInt($("#duration").val()),
			isAddHash: false
		});
	});

	$("#duration").keyup(function(){
		$('li.sp').smoothPageScroll({
			easing: this.value,
			speed: parseInt($("#duration").val()),
			target: '#' + positionTop + ',' + positionLeft
		});
		$("a[href*='#']").smoothPageScroll({
			easing: $("#changeEasing").val(),
			speed: parseInt(this.value)
		});
	}).blur(function(){
		$('li.sp').smoothPageScroll({
			easing: this.value,
			speed: parseInt($("#duration").val()),
			target: '#' + positionTop + ',' + positionLeft
		});
		$("a[href*='#']").smoothPageScroll({
			easing: $("#changeEasing").val(),
			speed: parseInt(this.value)
		});
	});
});
