/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     let producto1;
     let producto2;
     let producto3;
     let suma;

      producto1=parseFloat(document.getElementById("txtIdPrecioUno").value);

      producto2=parseFloat(document.getElementById("txtIdPrecioDos").value);

      producto3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma= producto1+producto2+producto3

    alert( "el suma es $ "+ suma);
}
function Promedio () 
{
     let producto1;
     let producto2;
     let producto3;
     let suma;
     let promedio;


     producto1=parseFloat(document.getElementById("txtIdPrecioUno").value);

     producto2=parseFloat(document.getElementById("txtIdPrecioDos").value);

     producto3=parseFloat(document.getElementById("txtIdPrecioTres").value);

     
    suma= producto1 + producto2 + producto3 ;
      
     promedio= suma % 3;

     alert ("el promedio es " + Promedio);

}
function PrecioFinal () 
{
	let producto1;
     let producto2;
     let producto3;
     let suma;
     let iva;
     let importefinal;
      producto1=parseFloat(document.getElementById("txtIdPrecioUno").value);

      producto2=parseFloat(document.getElementById("txtIdPrecioDos").value);

      producto3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma= producto1+producto2+producto3

    iva= suma * 21/100;

    importefinal=suma + iva;

    alert( "el importe final es $ "+ importefinal.toFixed(2));
}