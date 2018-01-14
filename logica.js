function soma(n1, n2){
			document.write(n1+n2);
		}

function tabuada(numeroRecebido){
	document.write("Número recebido: " + numeroRecebido);
	document.write("<br>");

	for(i = 1; i <= 10; i++){
		document.write(numeroRecebido + " x " + i + " = " + numeroRecebido*i);
		document.write("<br>");
	}

}