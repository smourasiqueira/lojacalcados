
document.querySelector('nav>button').addEventListener(

	// Evento a ser tratado (click)
	'click',

	// Função que executa quando o bt é clicado
	function() {

		// Capturando a UL do menu
		let ul = document.querySelector('nav>ul');

		// Alterando a altura da ul;
		ul.style.height = "400px"
	}

)