var imgz=document.getElementById("imgg")
var butx=document.getElementById("bt")
imgz.addEventListener("click",function () {
	if (imgz=imgg) {
		imgz.width="600"
		butx.style.display="inline";
	} else {
		imgz="400"
	}
	})
butx.addEventListener("click",function () {
	if (butx=bt) {
		imgz.width="400"
		butx.style.display="none";

	} else {
		imgz="600"
	}
	})

