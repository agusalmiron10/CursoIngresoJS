/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let  eleccionMaquina;

function comenzar()
{
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


   
	

}//FIN DE LA FUNCIÓN
function piedra(){
    alert(eleccionMaquina)
}
{
   if(eleccionMaquina=="piedra"){
       alert("empate");
   }
   else if (eleccionMaquina=="papel"){
       alert("perdiste");
   }
   else{
       alert("perdiste");
   }

   

}//FIN DE LA FUNCIÓN
function papel(){
    alert(eleccionMaquina)
}

{
    if(eleccionMaquina=="piedra"){
        alert("ganaste");
    }
    else if (eleccionMaquina=="papel"){
        alert("empate");
    }
    else{
        alert("perdiste");
    }

}//FIN DE LA FUNCIÓN
function tijera(){
    alert(eleccionMaquina)
}
{
    if(eleccionMaquina=="piedra"){
        alert("perdiste");
    }
    else if (eleccionMaquina=="papel"){
        alert("ganaste");
    }
    else{
        alert("empate");
    }


}//FIN DE LA FUNCIÓN