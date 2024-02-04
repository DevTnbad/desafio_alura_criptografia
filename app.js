function capturaEntrada() {
    const texto = document.getElementById("caixa__entrada").value;
    return texto;
}

function codificar() {
    let texto = capturaEntrada(); 
    console.log(texto);
    let saida = "";
    if (verificaCaracterInvalido(texto)) {
        alert("O texto não pode conter letras maiúsculas ou acentuação!");
        return false;  
    }

    if (texto.trim() === "") {
        alert("Escreva alguma coisa usando somente letras minusculas.");
        return false;
    }

    for (let letra of texto) {
        switch (letra) {
            case 'a':
                saida += 'ai';
                break;
            case 'e':
                saida += 'enter';
                break;
            case 'i':
                saida += 'imes';
                break;
            case 'o':
                saida += 'ober';
                break;
            case 'u':
                saida += 'ufat';
                break;
            default:
                saida += letra;
        }
    }
    document.getElementById("botoes__copiar").style.display = "flex"
    formataSaida();
    document.getElementById("caixa__saida").innerHTML = saida;
    return console.log(`saida: ${saida}`);
}

function formataSaida() {
    document.getElementById("saida-img").style.display = "none";
    document.getElementById("saida-h2").style.display = "none";
    document.getElementById("saida-p").style.display = "none";
    document.getElementById("caixa__entrada").value = "";

}

function decodificar() {
    let texto = capturaEntrada(); 
    if (texto.trim() === "") {
        alert("Escreva o texto codificado para que seja possivel decodificar.");
        return false;
    }
    console.log(texto);
    let saida = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto.substring(i, i + 2) === "ai") {
            saida += 'a';
            i++;
        } else if (texto.substring(i, i + 5) === "enter") {
            saida += 'e';
            i += 4; 
        } else if (texto.substring(i, i + 4) === "imes") {
            saida += 'i';
            i += 3; 
        } else if (texto.substring(i, i + 4) === "ober") {
            saida += 'o';
            i += 3;
        } else if (texto.substring(i, i + 4) === "ufat") {
            saida += 'u';
            i += 3;
        } else {
            saida += texto[i];
        }
    }
    formataSaida();
    document.getElementById('caixa__saida').innerHTML = saida;
    return console.log(`saida: ${saida}`);
}

function copiarTexto() {
    let copiado = document.getElementById('caixa__saida').innerHTML;
    if (copiado.trim() !== "") {
        navigator.clipboard.writeText(copiado)
        document.getElementById('caixa__entrada').value = copiado;
        document.getElementById("caixa__saida").innerHTML = "";
    }
}

function verificaCaracterInvalido(textoDigitado) {
    const regexAcentuacao = /[áàãâéèêíïóôõöúüç]/i;
    const regexMaiuscula = /[A-Z]/;
    return regexMaiuscula.test(textoDigitado) || regexAcentuacao.test(textoDigitado);
}
