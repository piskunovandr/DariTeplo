$(function(){
	let input = document.querySelector('#name');
	let label = document.querySelector('label[for="name"]');
	input.addEventListener('focus', () => {
	  label.style.visibility = 'hidden';
	});
	input.addEventListener('blur', () => {
	  label.style.visibility = 'visible';
	});
})