function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function cuadrado(a) {
    return a * a;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
}