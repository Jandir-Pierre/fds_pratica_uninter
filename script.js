
    
    const botao = document.querySelector("#botaoMens"); 
    let campo = document.querySelector("#campo");
    
    botao.addEventListener("click", trocaTexto); 

    function trocaTexto(){
       campo.innerHTML = "Seja bem vindo à minha página!";
    }
