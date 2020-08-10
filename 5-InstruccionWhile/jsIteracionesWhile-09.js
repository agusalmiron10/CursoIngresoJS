/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let maximo=0;
	let minimo=1;
	let seguir;
	let flag=0;


	do {
	  numero= parseInt(prompt("ingrese un numero:"));

	  if(flag==0){
		maximo=numero;
		minimo=numero;
		flag=1;

	 }
	

      if(numero>maximo){
          maximo=numero
	  }


	   if(numero<maximo){
		minimo=numero
	}




	  seguir= prompt("quiere ingresar otro numero?");
	} while (seguir=="s");

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;

}//FIN DE LA FUNCIÓN