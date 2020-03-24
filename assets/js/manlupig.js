(function() {
	// Get my name and transform them into individual letters
	// in a <span> with animation.
	const element = document.querySelector('#name');
	const name = element
		.textContent
		.split('')
		.map(letter => `<span class="letter">${letter}</span>`)
		.join('');
	element.innerHTML = name;

	// Theme toggler
	const body = document.body;
	const theme_selectors = document.querySelectorAll('.theme-selector');
	for(const selector of theme_selectors) {
		selector.addEventListener('click', function(e) {
			body.className = this.dataset.theme;
		});
	}
})();