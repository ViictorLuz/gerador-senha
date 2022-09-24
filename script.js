let sliderElement = document.querySelector("#slider"); //Retorna o primeiro elemento dentro do documento
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"; //Caracteres que irão aparecer na senha
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() { //Esta passando para o sizePassword receber o valor que tem atualmente
    sizePassword.innerHTML = this.value;
}

function generationPassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))   
    }
    containerPassword.classList.remove("hide"); //Remove a class hide e mostra a senha.
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha); // Vai copiar o que estiver dentro da variável novaSenha
}

    //pass += Para toda vez concatenar com uma coisa a mais

    //charAT vai pegar com base na posição o item que você esta querendo ex: 0=a, 1=b, 2=c...

    //Math.floor para gerar um número inteiro

    //Math.random para gerar um número aleatório

    // n é o tamanho do charset

    //Vai começar no 0 e vai continuar passando no for até o i seja menor que o sliderElement.value 

    // sliderElement.value é a quantidade de caracteres que o usuário selecionou 