function mostrar()
{
	let mes ;
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes){
		case ("Enero"):
			alert("este mes tiene 30 dias ");
			break;
      case ("Febrero"):
		  alert("este mes no tiene mas de 29 dias ");
		  break;
	  case ("Marzo"): 
	   case("Abril"):
	   case("Mayo"):
	   case("Junio"):
	   case("Julio"):
	   case("Agosto"):
	   case("Septiembre"):
	   case("Octubre"):
	   case("Noviembre"):
	   case("Diciembre"):
	   alert("este mes tiene 30 dias o mas ");
	   break;
	}  

}//FIN DE LA FUNCIÓN