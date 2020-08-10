/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre;	
	let edad;	
	let sexo;	
	let estadocivil;	
	let temperatura;
	let bandera1=0;
	let maxtemperatura=0;
	let nombreconmastemperatura;
	let bandera2=0;
	let contadormayores=0;
	let viudomayores=0;
	let personasdelaterceraedad=0;



	
	   nombre=(prompt("ingrese su nombre"));
	   while(isNaN(nombre)==false)
	   {
          nombre=(prompt ("re ingrese un nombre"));
	   }


	   edad=parseInt(prompt("ingrese su edad"));
	   while(isNaN(edad))
	   {
          edad=parseInt(prompt("re ingrese edad"));
	   }
	   
	   sexo=prompt("ingrese su sexo: (f o m)");
	   while(isNaN()==false)
	   {
		   sexo=(prompt("re ingrese su sexo"));
	   }
	   estadocivil=prompt("ingrese su estado civil: (soltero , casado o viudo)");
	   while(estadocivil!="soltero"  && estadocivil!="casado" && estadocivil!="viudo")
	   {
		   estadocivil=(prompt("re ingrese su estado civil"));
	   }
		  if (edad>17)
		  {
			 switch(estadocivil)
			 {
				 case "viudo":
					viudomayores++;
					break;

			 }
		  }
	   switch(estadocivil)
	   {
		   	case "viudo":
			case"soltero":
				if(bandera2==0)
				{
				   contadormayores++
				
				}
			break;
	   }
	   temperatura=parseInt(prompt("ingrese su temperatura"))
	   while(isNaN(temperatura))
	   {
		   temperatura=parseInt(prompt("re ingrese su temperatura"));
	   }
	   //validando la a
	   if(bandera1==1 || temperatura>maxtemperatura)
	   {
		  maxtemperatura=temperatura;
		  nombreconmastemperatura=nombre;
		  bandera1=0;		  
	   }
	   
	   if(edad>60 && temperatura>=38)
	   {
           personasdelaterceraedad++;
	   }
	   
	   
    alert("las personas de la tercer edad son:" + personasdelaterceraedad);
    
    alert("los mayores viudos o solteros son :" + contadormayores);  
	
   alert("el nombre con la mayor temperatura es : "  +  estadocivil);
 
  alert("el nombre con la mayor temperatura es : "  +  nombreconmastemperatura);


}
