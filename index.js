function parsearValor (texto){
    return parseFloat(prompt(texto));
}

function mostrarTexto (operacion,valor) {
    alert("La " + operacion + " es: " + valor);
}

let valorUno = parsearValor("Ingrese un Numero")
let valorDos = parsearValor("Ingrese otro numero")

while(isNaN(valorUno) || isNaN(valorDos)){
    valorUno = parsearValor("Ingrese de nuevo el primer numero")
    valorDos = parsearValor("Ingrese de nuevo el segundo valor")
}

const operacion = prompt("Que operacion queres hacer?")

switch(operacion){
    case "+":
        mostrarTexto("suma", (valorUno + valorDos))
    break;

    case "-":
        mostrarTexto("resta", (valorUno - valorDos))
    break;

    case "*":
        mostrarTexto("multiplicacion", (valorUno * valorDos))
    break;

    case "/":
        mostrarTexto("división", (valorUno / valorDos))
    break;

    default:
        console.log("Operación ingresada incorrecta...");
    break;
}