function home() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('upper-right').style.display = 'block';
	document.getElementById('home').style.display = 'block';
	document.getElementById('down-right').style.margin = '0px';
	document.getElementById('artical').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
}
function artical() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('upper-right').style.display = 'none';
	document.getElementById('home').style.display = 'none';
	document.getElementById('artical').style.display = 'block';
	document.getElementById('down-right').style.margin = '82 0 0 0px';
	document.getElementById('portfolio').style.display = 'none';
}
function portfolio() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('upper-right').style.display = 'none';
	document.getElementById('home').style.display = 'none';
	document.getElementById('artical').style.display = 'none';
	document.getElementById('down-right').style.margin = '82 0 0 0px';
	document.getElementById('portfolio').style.display = 'block';
}

/* -----------For Typing Animation-------------- */
(function myfunc() {
	const string = 'Programmer';
	let index = 0;
	let letter = '';
	(function type() {
		letter = string.slice(0, ++index);
		document.querySelector('.typing').textContent = letter;
		if (letter.length === string.length) {
			index = 0;
		}
		setTimeout(type, 400);
	})();
})();
