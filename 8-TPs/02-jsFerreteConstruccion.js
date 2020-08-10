/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro
    let alambre;


    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    perimetro= largo + largo + ancho + ancho;
    alambre=perimetro * 3;



   

    alert("se necesitan "+ alambre + " metros de alambre");


}
function Circulo () 
{
    
    let alambre;
    let perimetro
    let radio;
    const PI =3.14;

   radio= parseInt(document.getElementById("txtIdRadio").value);
    
    perimetro= 2* radio * PI;

    alambre=perimetro * 3;


    alert("se necesitan "+ alambre + " metros de alambre");
}
function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let area;
    let cal;


    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    area = largo *  ancho;

    cemento = 2* area;

    cal = 3* area;

    alert( " para hacer el contrapiso de  "+ area + "m2 se necesitan "+ cemento+ "bolsas de cemento "+ cal+ "bolsas de cal");

}