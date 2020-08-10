function mostrar()
{

	let numero;
	let contadordedivisores=0;

	numero= parseInt(prompt("ingrese un numero"));
	for(i=1; i<=numero; i++){
	   
		if(numero%i==0){
			console.log(i);
			contadordedivisores++;
		}
		

	}
   console.log("cantidad de numero encontrados:" + contadordedivisores);


}//FIN DE LA FUNCIÓN