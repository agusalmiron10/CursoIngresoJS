function mostrar()
{

	let numero;
	let contadordedivisores=0;

	numero= parseInt(prompt("ingrese un numero"));
	for(i=1; i<=numero; i++){
	   
		if(i%1==0){
			
			contadordedivisores++;
	
		}
		

	}

	if(contadordedivisores !=2){
		alert(numero+ "no es primo");
	}
	else{
		alert(numero+  " es primo ");
	}
  
	

}//FIN DE LA FUNCIÓN