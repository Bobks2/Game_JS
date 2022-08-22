function start(){
  var del = document.getElementById("tela");
  	if (tela.parentNode){
  	 tela.parentNode.removeChild(tela);
  	 var p = document.createElement("p");
  	 document.body.appendChild(p);
  	 p.innerHTML = "Hello World!";
  	 p.setAttribute("class","start");
  	 (function(){
	 window.alert("inicio")}());
  	}

}
