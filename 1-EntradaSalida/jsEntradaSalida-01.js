/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/
//git status
//git add . 
//git commit -m (y lo que quiera poner)
//por ultimo git push

function mostrar()
{
	let nombremujermasjoven;
	let promediodelasalturas;
	let EdadDeLaMujerMasjoven=0;
	let nombre;
	let edad;
	let edadmasvieja=0;  
	let bandera=1;
	let bandera2=1;
	let bandera3=1;
	let contadorMujeres=0;
	let acumualturamujeres=0;
	let nombreDeLaPersonaMasVieja;
	let altura;
	let sexo;
	let dinero;
	let cantidaddehijos;
	

	for(let i=0 ;i<2; i++)
	{
		nombre=prompt("ingrese su nombre");
	   
		edad=parseInt(prompt("ingrese su edad"));
		while(edad<0 || edad >155)
		{
           edad=parseInt(prompt("edad invalidada, ingrese nueva edad"));
		}

		//punto a validando edad mas vieja
		if(bandera==1 || edad>edadmasvieja)
		{
			edadmasvieja=edad;
			nombreDeLaPersonaMasVieja=nombre;
			bandera=0;
			
			

		}

		altura=parseInt(prompt("ingrese su altura"));
		while(altura<30 || altura>230)
		{
            altura=parseInt(prompt("altura invalida"));
		}
		 
		sexo=prompt("ingrese su sexo");
		while(sexo!="femenino"&& sexo!="masculino")
		{
            sexo("sexo invalido");
		}

		switch(sexo)
		{
			//sacar el promedio
			
			case "femenino":
				if(bandera2==1 )     
				{
				   acumualturamujeres=acumualturamujeres+altura; //con esto se saca el promedio despues 
				   contadorMujeres++;   //esto es para contar las mujeres que se ingresaron y luego dividirlo para darte el promedio
		           
				   
				}
				if(bandera3==1|| edad<EdadDeLaMujerMasjoven) //para nombre de la muejr mas joven
				{
					nombremujermasjoven=nombre;
					EdadDeLaMujerMasjoven=edad;
					bandera3=0;
				}
			break;


		}
		dinero=parseInt(prompt("ingrese su dinero"));
		while(isNaN(dinero))
		{
            dinero=parseInt(prompt("el dinero es invalido:(re ingrese el dinero)"));
		}
		cantidaddehijos=parseInt(prompt("ingrese la cantidad de hijos"));
		while(cantidaddehijos<0 || cantidaddehijos>10)
		{ 
			cantidaddehijos=parseInt(prompt("vuelve a poner la cantidad de hijos"));
		}


        
	}
	promediodelasalturas=acumualturamujeres/contadorMujeres; //promedio
	alert("el nombre de la persona mas vieja  " + nombreDeLaPersonaMasVieja);
	alert("el promedio de la altura " + promediodelasalturas);
	alert("el nombre de la mujer mas joven es " + nombremujermasjoven);
	
	
	//con el contador se hacen las sumas de algo o el promedio
	//con el acumulador se acumulan los datos

 
	/*var i;
	for(i=0;i<5;i++)
	{

		alert(i);
	}
   */

	/*
	
	for(contador=0;contador<5;contador++)//2da parte
	{
	
		console.log(contador);
	}
	console.log("al salir: "+contador);
	*/
	/*
	contador=0;//1era parte
	while(contador<5)//2da parte
	{
		contador++;//3era parte
		console.log(contador);
	}
	console.log("al salir: "+contador);
 */
	



	
	
}

