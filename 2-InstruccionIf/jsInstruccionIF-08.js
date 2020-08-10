function mostrar()
{
	let edad;
	let estado;

	 estado=( document.getElementById("estadoCivil").value);
	 edad = parseInt(document.getElementById("txtIdEdad").value);


	if (estado== "Soltero" && edad >= 18) {
		alert("es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN