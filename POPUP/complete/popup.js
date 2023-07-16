/* evitar esta abordagem dado que é menos performativa */
/* idealmente devemos considerar alocar em memoria com recurso a varáveis os elementos com os quais queremos trabalhar durante o script */

window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('form').style.display = 'block';
		document.querySelector('.container').style.display = 'flex';
	}, 3000);
});

document.querySelector('#close').addEventListener('click', () => {
	document.querySelector('form').style.display = 'none';
	document.querySelector('.container').style.display = 'none';
});
