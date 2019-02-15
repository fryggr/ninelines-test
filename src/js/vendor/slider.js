let $sliderElem = $('.js-scale__rate');
let $thumbElem = $('.js-scale__pointer');

$thumbElem.on('mousemove', (event) => {
	function getCoords(elem) {
		let box = elem.offset();

		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
		};
	}
	let thumbCoords = getCoords($thumbElem);
	let shiftX = event.pageX - thumbCoords.left;
	let sliderCoords = getCoords($sliderElem);

	$(document).on('mousemove', (event1) => {
		let newLeft = event1.pageX - shiftX - sliderCoords.left;

		if (newLeft < 0) {
			newLeft = 0;
		}
		let rightEdge = $sliderElem.outerWidth() - $thumbElem.outerWidth();

		if (newLeft > rightEdge) {
			newLeft = rightEdge;
		}

		let degs = newLeft / 1.03;

		$thumbElem.css('transform', `rotate(${degs}deg)`);
		$('.odometer').html(Math.abs(parseInt(newLeft / 1.89, 10)));

		$(document).on('mouseup', () => {
			$(document).on('mousemove', () => $(document).on('mouseup', () => null));
		});

		return false;
	});

	$thumbElem.on('dragstart', () => {
		return false;
	});
});
