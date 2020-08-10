/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//pido numeros
     let numero;
	let positivo=0;
	let negativo=1;
	let seguir;
	let contadordenegativos=0;

	
	do {
		
		
		
		numero=parseInt(prompt("ingrese un numero: "));
	
		if(numero>=0){
            positivo=positivo+numero;
		} //positivo
		else{
			  contadordenegativos++;
              negativo= negativo*numero;
		} //negativo 

		

		
		seguir= prompt("quiere ingresar otro numero");

		

	} while (seguir=="s");

	if(contadordenegativos==0){
		//si entro aca es porque el usuario no ingreso ningun numero negativo
		//entonces cambio el 1 por un 0 para mostrar el resultado correcto
		negativo=0;
	}


  document.getElementById("txtIdSuma").value=positivo;
  document.getElementById("txtIdProducto" ).value=negativo;
   

}//FIN DE LA FUNCIÓN