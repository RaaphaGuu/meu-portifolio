/*- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele **/

  //- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html
  
  //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
  const projetosInativos =document.querySelectorAll('.projeto:not(.ativo)')
 // Passo 2 - identificar o clique no botão 
	
  botaoMostrarProjetos.addEventListener('click', () => {
	//Passo 3 - adicionar a classe ativo nos projetos escondidos 
	  mostrarMaisProjetos()
//	Objetivo 2 - esconder o botão de mostrar mais 
  	//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html
	  esconderBotao()
})

function esconderBotao() {
	botaoMostrarProjetos.classList.add('remover')
}

function mostrarMaisProjetos() {
	projetosInativos.forEach(projetosInativos => {
		projetosInativos.classList.add('ativo')
	})
}

function exibirInformacoes() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
}
 
function mostarContato(){
  contatoInativos.forEach(contatoEscondido =>{
    
contatoEscondido.classList('.ativo')
  })
}