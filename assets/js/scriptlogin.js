var pass=document.getElementById("psw");
var sp=document.getElementById("spn");
var eyevis=document.getElementById("visible");
var eyeinvis=document.getElementById("invisible");
sp.addEventListener('click',function () {
	if (pass.type=='password') {
		pass.type='text';
		eyevis.style.display='inline';
		eyeinvis.style.display='none';
	} else {
		pass.type='password';
		eyevis.style.display='none';
		eyeinvis.style.display='inline';
	}
})