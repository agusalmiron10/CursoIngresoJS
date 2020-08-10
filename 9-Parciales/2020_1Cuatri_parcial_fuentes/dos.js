function mostrar()
{
  /*let tipo;//validad("arena";"cal";"cemento") 
  let cantidadDeBolsas;
  let precioPorBolsa;
  let respuesta;
  let acumuladorDeBolsas;
  let precioBrutoTotal;
  let precioBrutoProducto;
  let porcentaje;
  let descuento;
  let precioConDescuento;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let tipoConMasUnidades;
  let banderaDelPrimerProducto;
  let tipoMasCaro;
  let tipoMasCaroPrecio;


  banderaDelPrimerProducto="es el primero";
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;

  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  respuesta="s";
  while(respuesta=="s")
  {

  	tipo=prompt("ingrese tipo");
  	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
  	{
  		tipo=prompt("error, ingrese tipo");
  	}
  	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
  	cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	while(cantidadDeBolsas<1)
  	{
  		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}



  	precioPorBolsa=prompt("ingrese cantidad de bolsas");
  	precioPorBolsa=parseInt(precioPorBolsa);
  	while(precioPorBolsa<1)
  	{
  		precioPorBolsa=prompt("error ,ingrese cantidad de bolsas");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}

  	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
  	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
  	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=tipo;
  		tipoMasCaroPrecio=precioPorBolsa;
  	}else
  	{
  		if(precioPorBolsa>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=tipo;
  			tipoMasCaroPrecio=precioPorBolsa;
  		}
  	}





  	switch(tipo)
  	{
  		case "arena":
  			acumuladorArena=acumuladorArena+cantidadDeBolsas;
  			break;
  		case "cal":
  			acumuladorCal=acumuladorCal+cantidadDeBolsas;
  			break;
  		case "cemento":
  			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
  			break;
  	}








  	respuesta=prompt("seguir ?")
  }//termine

  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
  	//arena
  	tipoConMasUnidades="arena";
  }else
  {
  	if(acumuladorCal>acumuladorCemento)
  	{
  		tipoConMasUnidades="cal";
  	}else
  	{
  		tipoConMasUnidades="cemento";
  	}
  }




  if(acumuladorDeBolsas>30)
  {
  	porcentaje=25;

  }else
  {
  	if(acumuladorDeBolsas>10)
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }

 



  if(porcentaje!=0)
  {
  	descuento=precioBrutoTotal*porcentaje/100;
  	precioConDescuento=precioBrutoTotal-descuento;
 	console.log("pagar con descuento: "+precioConDescuento);		
  }

 // El importe total a pagar , bruto sin descuento
 console.log("bruto sin descuento: "+precioBrutoTotal);
 console.log("el tipo mas comprado es: "+tipoConMasUnidades);
 console.log("el tipo mas caro  es: "+tipoMasCaro);


   */


  function mostrar()
  {
	 let tipo;
	 let cantidadBolsas;
	  let precioBolsa; 
	  let seguir;
	  let contadorBolsas=0;
	  let precioTotalBolsas=0
	  let descuento;
	  let importeBruto;
  do{
  tipo=prompt("Favor, ingrese productos de construccion: CAL, CEMENTO o ARENA");
  while (tipo!="CAL" && tipo!="CEMENTO" && tipo!="ARENA"){
  tipo=prompt("Por favor, reingrese un producto valido: CAL, CEMENTO O ARENA");
  }
  cantidadBolsas=parseInt(prompt("Favor, ingrese cantidad de bolsas"));
  contadorBolsas++;//contador de cantidad de bolsas
  
  precioBolsa=parseInt(prompt("Favor,ingrese precio de la bolsa"));
  while (precioBolsa<0){
  precioBolsa=parseInt(prompt("Favor,Reingrese precio de la bolsa mayor a 0"));
  }precioTotalBolsas+=precioBolsa;//acumula de precios de las bolsas
  importeBruto=contadorBolsas*precioBolsa; //importe a pagar sin desc..PUNTO A
  //PUNTO B
  if (contadorBolsas>10){
	  descuento=15;
  precioDescuentoBolsas=precioTotalBolsas - precioTotalBolsas*descuento/100;
  }else if (contadorBolsas>=30){
		  descuento=25;
  precioDescuentoBolsas=precioTotalBolsas - precioTotalBolsas*descuento/100;
  }
  console.log ("Si compra mas de 10 bolsas,tiene 15% de descuento y abona" + precioDescuentoBolsas )
  seguir=prompt("Desea ingresar mas productos?");
  }while (seguir=="SI");
  
}
