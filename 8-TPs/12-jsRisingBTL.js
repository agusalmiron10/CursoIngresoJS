/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 let edadIngresada;
	 let estadocivil;
	 let sexoIngresado;
	 let sueldobruto;
	 let Nacionalidad;
	 let legajo;
	 
	edadIngresada = prompt("Ingrese su edad: (18 a 90)");
	edadIngresada = parseInt(edadIngresada);
	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("ERROR!!! re-ingrese su edad: (18 a 90)");
	}

	if(isNaN(edadIngresada))
	{
		edadIngresada = "No se introducieron edades";
	}
	
	
	
	sexoIngresado=prompt("ingrese su sexo: ( M O F)");
	
	while(sexoIngresado!="M" && sexoIngresado!="F")
	{
		sexoIngresado=prompt("error no es un sexo");
	}
	
	//Validando estado civil; 
	estadocivil= parseInt (prompt("ingrese con el numero correspondiente si es: (1-soltero \n  2-casado \n  3-divorciado \n 4-viudo)"));
	while((estadocivil > 4 && estadocivil < 1) || isNaN(estadocivil))
	{
		
		estadocestadocivil=prompt(" ERROR!! re-ingrese con el numero correspondiente si es: (1-soltero \n  2-casado \n  3-divorciado \n 4-viudo)");ivil
	}
	 	  
	switch (estadocivil)
	{
		case 1:
			estadocivil="soltero";
			break;
		case 2:
			estadocivil="casado";
			break;
		case 3:
			estadocivil="divorciado"
			break;
		case 4:
			estadocivil="viudo"
			break;
	}
	
	
   sueldobruto= parseInt (prompt("pone tu sueldo: (no menos a 8000)"));

   while(sueldobruto<8000)
   {
	   sueldobruto=prompt("Error!! re- ingrese de nuevo");

   }
	


   legajo=parseInt(prompt("escribe tu numero de legajo"));
   while(legajo<1000 && legajo>10000)
   {
	   legajo=prompt("error re- escriba un numero");
   }



   Nacionalidad=prompt("  !A! para argentinos /n  !E! para extrangeros /n   !N! para nacionalizados ");
   while(Nacionalidad !="A" && Nacionalidad !="E" && Nacionalidad !="N")
   {
      Nacionalidad=prompt("Error re-ingrese de nuevo");
   }

   switch(Nacionalidad)
   {
	   case "A":
	 		 Nacionalidad="argentinos";	
       		 break;
		case "E":
			  Nacionalidad="extrangeros";
			  break;
		case"N":
		  Nacionalidad="nacionalizados"
		  break;
    }



	
	document.getElementById("txtIdLegajo").value=legajo;
	document.getElementById("txtIdNacionalidad").value=Nacionalidad;
	document.getElementById("txtIdSueldo").value=sueldobruto;
	document.getElementById("txtIdEstadoCivil").value=estadocivil;
	document.getElementById("txtIdSexo").value=sexoIngresado;
	txtIdEdad.value = edadIngresada;


	
	
	



}
