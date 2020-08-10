
/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/


function mostrar()


{
    let continente;
    let precioDia=100
    let descuento;
    let aumento;
    let precioFinal;
    let mercadoPago;
    let efectivo;
    let otroMedio;
    let DescDebito;
    let precioConDebito;
  let precioMercadoPago;
   let precioEfectivo;
 continente=document.getElementById("FormIngreso" ).value;
    
switch (continente){
    case "América":
    descuento=50;
   DescDebito=10;
   break;
    case "África":
    descuento=60;
    mercadoPago=15;
    efectivo=10;
    break;
    case "Europa":
    descuento=20;
    DescDebito=15;
    mercadoPago=10;
    otroMedio=5;
    break;
    default:
        aumento=20;
        break;
}//fin switch
if (continente=="America" || descuento!=0|| DescDebito!=0){
precioFinal=precioDia-precioDia*descuento/100;
precioConDebito=precioDia-precioDia*DescDebito/100 - precioFinal;
}
}
  





