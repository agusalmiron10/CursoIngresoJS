function mostrar()
{
	let edad;

	edad= parseFloat(document.getElementById("txtIdEdad").value);

	if (edad <13 || edad >17) {  // preguntamos si el valor de la edad esta afuera de el rango de edad.
	 alert ("no es adolescente");
	} 

}//FIN DE LA FUNCIÓN