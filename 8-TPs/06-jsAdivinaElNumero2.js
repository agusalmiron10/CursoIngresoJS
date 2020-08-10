/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos=0;
let flag=0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   numeroSecreto=Math.round(Math.random()*99+1);
  // alert (numeroSecreto);
  alert("listo ya pense un numero..");
   document.getElementById("txtIdIntentos").value=contadorIntentos;
   document.getElementById("txtIdNumero").focus();
		flag=1;
	

}

function verificar()
{
  let numero;
	if(flag==0 ){

    alert("debes presionar comenzar primero");
  }

	else{
    numero=parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value=contadorIntentos;
    

    if(numero==numeroSecreto){
	  switch(contadorIntentos){
		  case "usted es psiquico":
		  break;
	  }
	  switch(contadorIntentos){
		case 1:
		   alert("usted es psiquico")
		break;
		case 2:
			alert ("excelente percepcion")
			break;
		case 3:
			alert ("esto es suerte")
				break;
		case 4:
			  alert ("excelente tecnica")
			  break;
		case 5:
			 alert("usted esta en la media")
			 break;
	    case 6 :
		case 7:
		case 8:
		case 9:
		case 10:
			alert ("falta tecnica");
			break;
		default:
			alert("afortunado en el amor");
		
	}
	  


      alert(`presione "comenzar" para volver a empezar`);
      contadorIntentos=0;
	  flag=0;
	 
	  
    }
    else if (numero> numeroSecreto){
       alert("se paso");
    }
    else {
       alert ("le falta");
    }

    document.getElementById("txtIdNumero").value="";

     
     document.getElementById("txtIdNumero").focus()= "";

  
  }
}