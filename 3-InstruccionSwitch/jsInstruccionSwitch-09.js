function mostrar()
{
	let destino;
	let estacion;
	let descuento=0;
	let aumento= 0;
	let importefinal;
	const PRECIO = 15000
   destino= (document.getElementById("txtIdDestino").value);
   estacion=(document.getElementById("txtIdEstacion").value);


   switch(estacion){
	   case "Invierno":
	     if (destino=="Bariloche"){
		   aumento = 20;
	      }
	      else if (destino== "Mar del plata "){
		   descuento=20;
	      }
	      else{
		   descuento=10;
	      }
	       break;
		   case"Verano":
		   if (destino=="Bariloche"){
			descuento = 20;
		   }
		   else if (destino== "Mar del plata "){
			descuento=20;

		   }
		   else{
			descuento=10;
		   }
		   case "Otoño":
		   case "Primavera":
		   if(destino=="Bariloche" || destino== "Cataratas" || destino=="Mar del plata"){
			   aumento=10;
		   }
		   else{
			   aumento=0
		   }

		 
   
	
		}    
         
   
		if (aumento!= 0){
			importefinal=PRECIO+PRECIO*aumento/100;
		}
		else if (descuento!=0){
		   importefinal=PRECIO-PRECIOV*descuento/100
		}
		else{
			importefinal=PRECIO
		}
		alert("precio final"+ importefinal);
	  
}	

