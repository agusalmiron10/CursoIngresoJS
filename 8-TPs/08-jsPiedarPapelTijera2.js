var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	let numero;

    numero= Math.round(Math.random()*2 +1);
     if (numero==1){
         eleccionMaquina="papel";
     }
     else if (numero==2){
         eleccionMaquina="piedra";
     }
     else{
         eleccionMaquina="tijera"
	 }
	 mostrarResultado();
	 alert(eleccionMaquina);




}//FIN DE LA FUNCIÓN
function piedra()
{
	let comosalio;
	if(eleccionMaquina=="Piedra"){
		comosalio="Empate"
		ContadorDeGanadas++
	}
	
	else if (eleccionMaquina=="Papel"){
		comosalio="perdiste";
		ContadorDeGanadas++
	}
	
	else{
		comosalio="Ganaste"
		ContadorDeGanadas++
	}
		
	
	
    alert(eleccionMaquina+"--->"+ comosalio);
}//FIN DE LA FUNCIÓN
function papel()
{
	let comosalio;
	if(eleccionMaquina=="Piedra"){
		comosalio="Ganaste"
		ContadorDeGanadas++
	}
	else if (eleccionMaquina=="Papel"){
		comosalio="Empate";
		ContadorDeGanadas++
	}
	else{
		comosalio="Perdiste";
		ContadorDeGanadas++
	}
    alert(eleccionMaquina+"--->"+ comosalio);
}//FIN DE LA FUNCIÓN
function tijera()
{
	let comosalio;
	if(eleccionMaquina=="Piedra"){
		comosalio="Perdiste"
		ContadorDeGanadas++
	}
	
	else if (eleccionMaquina=="Papel"){
		comosalio="Ganaste";
		ContadorDeGanadas++
	}
	
	else{
		comosalio="Empate";
		ContadorDeGanadas++
	}
	}
    alert(eleccionMaquina+"--->"+ comosalio);
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
   document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
   document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
   document.getElementById("txtIdPerdidas").value= ContadorDePerdidas;
}