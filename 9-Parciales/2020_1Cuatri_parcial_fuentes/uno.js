
function mostrar()
{

		let tipo;
		let precio;
     	let marca;
		let cantidad;
		let fabricante;
		let promedioCompra;
		let precioAlcoholBarato;//del alcohol:
		let cantidadAlcoholBarato=0
		let fabricanteAlcoholBarato;
		let flagAlcohol=0
		let tipoMayorCantidad;
		let acumBarbijo=0
		let acumAlcohol=0
		let acumJabon=0
		let contadorAlcohol=0
		let contadorJabon=0
		let contadorBarbijo=0
	//generar un bucle q itere 5 veces(for porq se de ante mano las repeticiocnes)pido los datos de c producto(tipo,cantidad,precio,marca,fabricante) y validar datos
		 for (let i=0; i<5; i++){//es un bloque q se va a ejecutar 5 veces
		 tipo= prompt('Ingrese un producto de prevencion de contagio:"barbijo","jabon" o "alcohol"');
		 while(!(tipo=="barbijo" || tipo =="alcohol" || tipo=="jabon")){//lo valido
			 tipo=prompt('Tipo invalido."barbijo","jabon" o "alcohol"')
		 }
		 precio=parseInt(prompt("Ingrese el precio del producto"));
		 while (!(precio>=100 && precio<=300)){
			precio=parseFloat(prompt ("Precio invalido.Ingrese un precio entre 100 y 300"));
		 }
		 cantidad=parseInt(prompt("Ingrese la cantidad max 1000 unidades"));
		 while (!(cantidad>0 && cantidad<=1000)){
			cantidad=parseInt(prompt("Cantidad invalida"));
		 }
		 marca=prompt("Ingrese la marca");
		 fabricante=prompt("Ingrese el fabricante");	 
	
		//hasta aca pedi y valide los datos.
		//a/b lo puedo hacer con switch o if else//evaluamos cantidad de c tipo y vamos acumulandoycontando
		switch (tipo){
			case "alcohol":
				acumAlcohol = acumAlcohol+cantidad;
				contadorAlcohol++;
		if (flagAlcohol==0 || precio<precioAlcoholBarato){//para guardar el mas barato y cantidad precio y fabricante
		precioAlcoholBarato=precio;
		cantidadAlcoholBarato=cantidad;
		fabricanteAlcoholBarato=fabricante;
		flagAlcohol=1;
		}
		break;
			case "barbijo":
				acumBarbijo = acumBarbijo+cantidad;
				contadorBarbijo++;
		break;
			case "jabon":
				acumJabon=acumJabon+cantidad;
				contadorJabon++;
		break;
		}
		}//fin del for	//ahora hago calculos q se realizan una sola vez y me tengo q fijar cual es el acumulador mayor,si es el de barbijos,jabones o alcoholes
	if (acumAlcohol>acumBarbijo  && acumAlcohol > acumJabon){
	tipoMayorCantidad="Alcohol";
	promedioCompra=acumAlcohol/contadorAlcohol;
	}else if(acumBarbijo>= acumAlcohol && acumBarbijo > acumJabon ){
	tipoMayorCantidad= "Barbijo";
	promedioCompra= acumBarbijo/contadorBarbijo;
	}else{
	tipoMayorCantidad="Jabon";
	promedioCompra=acumJabon/contadorJabon;
	}
	//muestro la info
		//a 
	if (flagAlcohol==0){
		alert ("A.No se compro alcohol");
	}
	else{
		alert ("A. Datos alcohol barato:\nFabricante " + fabricanteAlcoholBarato + "\nCantidad" + cantidadAlcoholBarato + "\nPrecio:" +precioAlcoholBarato);   //barra invertida n nueva linea 
	}
	//b
	
	alert ("B- Tipo con mas unidades: " + tipoMayorCantidad + " y el promedio de compra es: " + promedioCompra);
	//c
	
		alert ("C-Cantidad de jabones: " + acumJabon);
	
	
	
	// declaracion de variables
	
	  
	
   
	//generar un bucle que itere 5 veces que sea for
	// dentro del bucle
	//pido los datos de cada producto(tipo,cantidad,precio,marca,fabricante)
	//debo validar los datos

	//para cumplir con el punto a 
	//me fijo si el producto es alcohol
	// y si es el primer alcohol o no y actualizo cantidad de precio y fabricante de ser necesario



	//para cumplir con el punto b
	//tengo que analizar la mayor cantidad e ir guardando el tipo del producto
	//que tiene esa cantidad y el precio y la cantidad obviamente 



	// para cumplir con el punto c 
   // analizar si el producto es un jabon y actuar en consecuencia 






	//fuera del bucle
	// presentar los informes


	
}
