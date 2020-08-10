function mostrar()
{
	let numero;
	let contadordepares=0;

	numero= parseInt(prompt("ingrese un numero"));
	for(i=1; i<=numero; i++){
	   
		if(i%2==0){
			console.log(i);
			contadordepares++;
		}
		

	}
   console.log("cantidad de numero encontrados:" + contadordepares);
	

}//FIN DE LA FUNCIÓN