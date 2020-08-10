function mostrar()
{
	let edad
   
	edad = parseFloat(document.getElementById("txtIdEdad").value);


	if (edad >=18){
		alert("es un adulto");
	}

	else if (edad >=13 && edad <=17){
		alert ("es un adolescente");
	}


	else{
		alert("es un niño");
	}

	 

} //FIN DE LA FUNCIÓN