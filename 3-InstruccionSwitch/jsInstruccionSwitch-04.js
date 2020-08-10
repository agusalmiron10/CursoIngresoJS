function mostrar()
{
	let mes ;
	mes = document.getElementById("txtIdMes").value;


	switch(mes){

       case("Enero"):
	   case("Marzo"):
	   case("Mayo"):
	   case("Julio"):
	   case("Agosto"):
	   case("Octubre"):
	   case("Diciembre"):
	   alert("este mes tiene 31 dias");
	   break;
	   
	
      case ("Febrero"):
	    alert("este mes no tiene mas de 28 dias ");
	  break;


	  case("Abril"):
	  case("Septiembre"):
	  case("Noviembre"):
	  case("junio"):
	  alert("este mes tiene 30 dias");
	  break;

		  
	  

	 

	   //fijarme

	  
	}  



}//FIN DE LA FUNCIÓN