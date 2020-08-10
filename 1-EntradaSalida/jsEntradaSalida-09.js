/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   let importe;
   let sueldo;
   let importefinal;


   sueldo= parseInt(document.getElementById("txtIdSueldo").value);

   importe=sueldo*10/100;
   importefinal=sueldo+importe;

   document.getElementById("txtIdResultado").value=importefinal;
   
   


}
