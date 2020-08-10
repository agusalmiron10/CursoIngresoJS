function mostrar()
{
	let nota;
	nota= Math.round(Math.random()*9 +1);

	if (nota>=9){
		alert("excelente nota" + nota);
	}
	else if (nota>=4){
		alert ( "aprobo nota"+ nota);
	}
	else{
		alert("vamos se puede "+ nota);
	}

}//FIN DE LA FUNCIÓN