var ipnam=document.getElementById("nom");
var spnam=document.getElementById("testnom")
ipnam.addEventListener("blur",function () {
if (ipnam.value=="") {
	spnam.textContent="le champe est obligatiore"
	spnam.style.color="red"
} else {
	ipnam.value=ipnam.value
	spnam.textContent="champe validé"
	spnam.style.color="green"
}
})
// ............prenm..............
var ipsurn=document.getElementById("prnm");
var spsurn=document.getElementById("testprn");
ipsurn.addEventListener("blur",function () {
	if (ipsurn.value=="") {
	spsurn.textContent="le champe est obligatiore"
	spsurn.style.color="red"
} else {
	ipsurn.value=ipsurn.value
	spsurn.textContent="champe validé"
	spsurn.style.color="green"
}
})
// ..............tel............
var iptel=document.getElementById("tel");
var sptel=document.getElementById("testtel");
iptel.addEventListener("blur",function () {
	if (iptel.value=="") {
	sptel.textContent="le champe est obligatiore"
	sptel.style.color="red"
} else {
	iptel.value=iptel.value
	sptel.textContent="champe validé"
	sptel.style.color="green"
}
})
// ................mail..........
var ipmail=document.getElementById("mail");
var spmail=document.getElementById("testmail");
ipmail.addEventListener("blur",function () {
	if (ipmail.value=="") {
	spmail.textContent="le champe est obligatiore"
	spmail.style.color="red"
} else {
	ipmail.value=ipmail.value
	spmail.textContent="champe validé"
	spmail.style.color="green"
}
})

var ipotr=document.getElementById("otr")
var ipentrz=document.getElementById("entr");
ipotr.addEventListener("click",function () {
	if (ipotr.type=="checkbox"){
		ipentrz.disabled=true;
		spentrz.textContent=""
	} else {
		 ipentrz.disabled=false;
	}
})
// ..............entpriz....................
var ipentrz=document.getElementById("entr");
var spentrz=document.getElementById("testentrz");
ipentrz.addEventListener("blur",function () {
	if (ipentrz.value=="") {
	spentrz.textContent="veulliez saisire le nom de votre entreprise"
	spentrz.style.color="red"
} else {
	ipentrz.value=ipentrz.value
	spentrz.textContent="champe validé"
	spentrz.style.color="green"
}
})
// ..............msg................
var ipmsg=document.getElementById("msg");
var spmsg=document.getElementById("testmsg");
ipmsg.addEventListener("blur",function () {
	if (ipmsg.value=="") {
	spmsg.textContent="Inserer votre message"
	spmsg.style.color="red"
} else {
	ipmsg.value=ipmsg.value
	spmsg.textContent="Message validé"
	spmsg.style.color="green"
}
})
