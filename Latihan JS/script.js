const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
	document.body.classList.toggle('berubah1');
}
const tombolBaru = document.createElement('button');
const teksTombol = document.createTextNode('Click Aku');
tombolBaru.appendChild(teksTombol);
tombolBaru.setAttribute('type','button');
tombolBaru.setAttribute('id','tRandomWarna');
tUbahWarna.after(tombolBaru);

tombolBaru.addEventListener('click', function(){
	var r = Math.round(Math.random() * 255 + 1);
	var g = Math.round(Math.random() * 255 + 1);
	var b = Math.round(Math.random() * 255 + 1);
	let a = Math.random()+ 0.2;
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
	var r = Math.round(Math.random() * 255 + 1);
	var g = Math.round(Math.random() * 255 + 1);
	var b = Math.round(Math.random() * 255 + 1);
	document.body.style.color = `rgba(${r},${g},${b},${a})`;
});

const geserMerah = document.querySelector('input[name="Red"]');
const geserHijau = document.querySelector('input[name="Green"]');
const geserBiru = document.querySelector('input[name="Blue"]');

const h1 = document.getElementsByTagName('h1')[0];

geserMerah.addEventListener('input', function(){
	red = geserMerah.value;
	green = geserHijau.value;
	blue = geserBiru.value;
	total = red+green+blue;
	document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
	if(total <= 255){
		h1.style.color = 'white';
	}else {
		h1.style.color = 'black';
	}
});
geserHijau.addEventListener('input', function(){
	red = geserMerah.value;
	green = geserHijau.value;
	blue = geserBiru.value;
	total = red+green+blue;
	document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
	if(total <= 255){
		h1.style.color = 'white';
	}else {
		h1.style.color = 'black';
	}
});
geserBiru.addEventListener('input', function(){
	red = geserMerah.value;
	green = geserHijau.value;
	blue = geserBiru.value;
	total = red+green+blue;
	document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
	if(total <= 255){
		h1.style.color = 'white';
	}else {
		h1.style.color = 'black';
	}
});
