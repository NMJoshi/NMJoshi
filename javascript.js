function home() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('home').style.display = 'block';
	document.getElementById('artical').style.display = 'none';
	document.getElementById('portfolio').style.display = 'none';
}
function artical() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('home').style.display = 'none';
	document.getElementById('artical').style.display = 'block';
	document.getElementById('portfolio').style.display = 'none';
}
function portfolio() {
	// document.getElementById('home').style.display = 'none';
	// alert('hello');
	document.getElementById('home').style.display = 'none';
	document.getElementById('artical').style.display = 'none';
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
