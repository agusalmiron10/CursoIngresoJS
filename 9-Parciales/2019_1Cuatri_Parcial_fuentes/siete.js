function mostrar()
{
  //  Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
 // a) El promedio de las alturas totales.
   // b) La altura más baja y el sexo de esa persona.
   //c) La cantidad de muheres que su altura supere los 190 centimetros.     
   /*
    let alturasEnCentimetros;
	let sexoIngresado;
	let contadorjugadores;
	let alturasTotales;
	let alturaMasBaja
	let bandera;
	let banderaAlturasTotales;
	let sexoDelMasBajo;
	let cantidadMujeresAltura190;
	let promedioAlturasTotales;

	banderaAlturasTotales = 1;
	bandera = true;
	contadorjugadores = 0;
	alturasTotales = 0;

	while(contadorjugadores < 5)
	{
		//Asignando los centimetros
		alturasEnCentimetros = prompt("Ingrese la altura: (entre 0 y 250)");
		alturasEnCentimetros = parseInt(alturasEnCentimetros);
		while(alturasEnCentimetros > 250 || alturasEnCentimetros < 0)
		{
			alturasEnCentimetros = prompt("Error!!! re-ingrese la altura : (entre 0 y 250)");
			alturasEnCentimetros = parseInt(alturasEnCentimetros);
		}

		//asignando el sexo a cada jugador de basquet;
		sexoIngresado = prompt("Ingrese el sexo del jugador: (m/f)");
		while(sexoIngresado != "m" && sexoIngresado != "f" )
		{
			sexoIngresado = sexoIngresado = prompt("Error!!!! re-ingrese el sexo del jugador: (m/f)");
		}

		contadorjugadores++;
	}
	//validacion a
	if(banderaAlturasTotales == 1)
	{
		alturasTotales = alturasTotales + alturasEnCentimetros;
		contadorjugadores++;
	}


	//Validacion b
	if(bandera == true || alturasEnCentimetros < alturaMasBaja)
	{
		alturaMasBaja = alturasEnCentimetros;
		sexoDelMasBajo = sexoIngresado;
	}
	bandera = false;

	//valida c
	switch(sexoIngresado)
	{
		case "f":
			if(alturasEnCentimetros > 190)
			{
				cantidadMujeresAltura190++;
			}
			else
			{
				cantidadMujeresAltura190 = "Ninguna mujer supera los 190cm";
			}
			break;
	}

	  promedioAlturasTotales = alturasTotales / contadorjugadores;

	  alert("El promedio de las alturas totales es: " + promedioAlturasTotales);
	  alert("La altura mas baja es: " + alturaMasBaja + " y el sexo es: " + sexoDelMasBajo);
	  alert("La cantidad de mujeres con la altura mayor a 190cm es: " + cantidadMujeresAltura190);
	  */
	  




	  let altura;
	  let sexo;
	  let contadorMujeres=0;
	  let promedio;
	  let acumAltura=0;
	  let alturaMasBaja;
	  let sexoMasBajo;
	  let flagBaja=0;
	  for(let i=0;i<5;i++){
	   altura=parseInt(prompt("Ingrese su altura expresada en cm"));
	  while(altura<0 && altura>250){
		  let altura=parseInt(prompt("Altura invalida! Ingrese una altura entre 0 y 250"));
	  }
	  acumAltura+=altura; // acumulo la altura
	  sexo=prompt("Ingrese F si es mujer y M si es varón".toLowerCase());
	  while(sexo!="f" && sexo !="m"){
		  sexo=prompt("Letra invalida! Ingrese F si es mujer y M si es varón".toLowerCase());
	  }
	  if(flagBaja==0 || altura<alturaMasBaja){
		  alturaMasBaja=altura;
		  sexoMasBajo=sexo;
		  flagBaja=1;
	  }
	  if(sexo=="f" && altura>190){
		  contadorMujeres++
	  }
	  }
	  if(sexoMasBajo=="f"){
		  sexoMasBajo="mujer";
	  }
	  else{
		  sexoMasBajo="varón";
	  }
	  promedio=acumAltura/5;
	  alert("El promedio es "+promedio);
	  alert("La altura mas baja es "+alturaMasBaja+" y esa persona es "+sexoMasBajo);
	  alert("La cantidad de mujeres cuya altura es superior a 190cm es "+contadorMujeres);
	  
	  
	  
	//un acumulador suma por ejemplo 1+1 2;
	// un contador suma uno mas uno mas unooo
	//flag pase por un bloque del codigo;
	
  
}
