/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let suma=0;
	let numero;
	let promedio;
	let seguir = `s`;
	let contador=0;
	
	while (seguir==`s`) {
		numero= parseInt(prompt("ingrese un numero"));
		suma=suma+numero;
		contador++;
		seguir= prompt("quiere que lo vuelva a saludar");
		
	}
	promedio=suma/contador;
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	



}//FIN DE LA FUNCIÓN