function mostrar()
{
	//tomo el mes
	let mes ;
	mes =document.getElementById("txtIdMes").value;
	
	
	switch(mes){
		case "Enero":
		alert("que comiences bien el año");
		break;

		case "Marzo":
		alert ("a clases !!");
		break;

		case "Julio":
		alert ("se vienen las vacaciones");
		break;

		case "Diciembre":
		alert("felices fiestas");
		break;
	}
	
	
	
	
	
	
	
	/*if (mes== "Enero"){
		alert ("que comiences bien el año");
	}
	else if (mes== "Marzo"){
		alert("a clases!!");
	}
	else if (mes=="Julio"){
		alert("se vienen vacaciones");
	}
    else if (mes=="Diciembre"){
		alert("felices fiestas ");
	}
   */

}//FIN DE LA FUNCIÓN