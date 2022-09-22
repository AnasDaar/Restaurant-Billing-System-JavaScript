
function total(){
	var drinks = parseInt(document.getElementById("a1").value );
	var fries =  parseInt(document.getElementById("a2").value);
	var lunch =  parseInt(document.getElementById("a3").value);
	var burger =  parseInt(document.getElementById("a4").value);
	var pizza =  parseInt(document.getElementById("a5").value);
	var cheese =  parseInt(document.getElementById("a6").value);
	var dri = drinks * 40 || 0;
    var fri = fries * 80 || 0;
    var lun = lunch * 100 || 0;
    var bur = burger * 190 || 0;
    var piz = pizza* 300 || 0;
    var chese = cheese * 290 || 0;
	var total=dri+fri+lun+bur+piz+chese;
	var tax = total*5/100 || 0;
	var service = total*5/100 || 0;
	document.getElementById("tol").innerHTML=total;
	document.getElementById("tax").innerHTML=tax;
	document.getElementById("serv").innerHTML=service;
	document.getElementById("subt").innerHTML=total+tax+service;
};