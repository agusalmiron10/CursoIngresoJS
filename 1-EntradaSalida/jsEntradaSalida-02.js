/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

/*Enunciado c)”mixing bandera”
De una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente:
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()*/


function mostrar()
{
	let raza;
	let peso;
	let temperaturamedia;
	let edad;
	let acumulaciondeedades=0;
	let contadoredades=0;
	 let bandera2=0;
	 let bandera3=0;
	 let temperaturamaxima;
	 let contadortemperatura=0;
	 let promedio;
	 let pesomaspesado;
	let bandera1=0;   //para sacar la acumulacion de la edad   siempre poner bandera
	let peligrodeextincion;
	let razamaspesada;
	let respuesta=true;


	while(respuesta==true)
	{
	   raza=prompt("ingrese la raza");
	   while(isNaN(raza)==false) //isnan y algo adentro() ==false es para que si el usuario ingrese numero de error
	   {     
		   raza=prompt("invalido ingrese nueva raza nueva");
	   }

	   
	   peso=parseInt (prompt("ingrese su peso"));//cuando es un numero de por si no le pongo el false 
	   while(isNaN(peso))
	   {
           peso=prompt("el peso es invalido");
	   }

	   if(bandera2==0 || peso>pesomaspesado)
	   {
		  pesomaspesado=peso;
		  razamaspesada=raza;
		  bandera2=1;
	   }
	   edad=parseInt(prompt("ingrese su edad"));//cuando es un numero de por si no le pongo el false 
	   while(isNaN(edad))
	   {
		   edad=parseInt(prompt("ingrese una nueva edad "));
	   }

	   if (bandera1==0 )
	   {
		  acumulaciondeedades=acumulaciondeedades+edad;
		  contadoredades++;  
	   }


	   temperaturamedia=parseInt(prompt("ingrese su temperatura")); //cuando es un numero de por si no le pongo el false 
	   while(isNaN(temperaturamedia))
	   {
		   temperaturamedia=parseInt(prompt("ingrese nueva temperatura:(invalido)"));
	   }
	   if(bandera3==0 || temperaturamedia>temperaturamaxima)
	   {
		   temperaturamaxima=temperaturamedia;
		   bandera3=1;
	   }

	   peligrodeextincion=prompt("esta en peligo de extincion?: (si o no)");
	   while(peligrodeextincion!="si" && peligrodeextincion!="no")
	   {
           peligrodeextincion=prompt("error,invalido");
	   }
	   

		
		
		respuesta= confirm("desea seguir ingresando datos?");
	}

   promedio=acumulaciondeedades/contadoredades;
   console.log("el promedio es: " + promedio);
   console.log("la raza del mas pesado es  " + razamaspesada);
   console.log("la temperatura maxima es: " + temperaturamaxima);
	
}

