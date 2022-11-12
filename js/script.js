function start(){
  var del = document.getElementById("tela");
  	if (tela.parentNode){
  	 tela.parentNode.removeChild(tela);
  	var n = document.createElement("n"); 
	var p = document.createElement("p");
  	 document.body.appendChild(p);
  	 p.innerHTML = "Hello World!";
	 p.setAttribute("class","start");

	 document.body.appendChild(n);
	 n.innerHTML = "Name: default";
	 n.setAttribute("class","name");
  	 (function(){
	 window.alert("inicio")}());
  	}

}
function avatar(){
 var del = document.getElementById("tela");
	if (tela.parentNode){
	tela.parentNode.removeChild(tela);
	var p = document.createElement("p");
	var img = document.createElement("img");
	p.innerHTML = "Name: default";
	document.body.appendChild(p);
	p.setAttribute("class","name")
        document.body.appendChild(img);
        img.setAttribute("src","img/robo_down_0.png");
		img.setAttribute("class","img");
	}
}
