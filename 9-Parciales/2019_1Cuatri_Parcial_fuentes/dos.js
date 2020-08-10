function mostrar()
{
  let nombredelhombre;
  let nombredelamujer;
  let peso;
  let peso2;  
  let pesototal;
  let promedio;

  nombredelhombre=prompt("ingrese su nombre",);
  nombredelamujer=prompt("ingrese su nombre",);

  peso=parseInt (prompt("ingrese su edad"));
  peso2=parseInt (prompt("ingrese su edad"));

  pesototal=peso+peso2;
  promedio=pesototal/2;

  alert(" ustedes se llaman " + nombredelhombre +  " y "  + nombredelamujer + " pesan " + peso + " y " + peso2 + " que sumados son "  +  pesototal +  "el promedio de edad es "  + promedio );

  

}
