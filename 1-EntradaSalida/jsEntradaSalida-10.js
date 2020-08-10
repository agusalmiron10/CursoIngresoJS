/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
   let numero;
   let sueldo;
   let importefinal;

    numero= parseInt(document.getElementById("txtIdImporte").value);


   sueldo=numero *25/100;  //250
   importefinal=numero-sueldo; //1000-750

   document.getElementById("txtIdResultado").value=importefinal.toFixed(2);
	
	
}
