function mostrar()
{
	let destino;
	destino= (document.getElementById("txtIdDestino").value);


	switch(destino){
	case "Bariloche":
		alert("Oeste");
		break;
	 case "Ushuaia"	:
	 alert("sur");
		break;
	 case "Mar del plata":
	 alert ("Este");
	 break;

	 case "Cataratas":
	 alert("Norte");
	 break;
	
	}
}//FIN DE LA FUNCIÓN