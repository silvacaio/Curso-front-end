	/*var  resposta = confirm("Deseja escluir?");

	console.log(resposta);*/

	const valorA = 1;
	const valorB = 1;

	function somar(a, b)
	{
		return parseInt(a) + parseInt (b);
	}

	document.querySelector("#calcular").addEventListener("click", function() {
		let valorA = document.querySelector("#valorA").value;
		let valorB = document.querySelector("#valorB").value;
		
		if(valorA.length > 0 && valorB.length > 0)
			alert(somar(valorA, valorB));
		else
			alert("Digite os valores para o calculo");
	});

	/*console.log(somar(2, 5));*/