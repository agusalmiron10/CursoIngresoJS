function mostrar()
{    
	
	
	 let i=0
	 let numero;

	 let suma=0;
	 let promedio;



	while (i<5) {
		numero=parseInt(prompt("ingrese un numero"));
		suma =suma+numero;
		i++
	}

	 promedio= suma/5;
	 document.getElementById("txtIdSuma").value=suma;
	 document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN