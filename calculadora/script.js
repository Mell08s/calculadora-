function realizarOperaciones() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = "";

    for (let i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                resultado += "<p>Iteración 1 (Suma): " + (num1 + num2) + "</p>";
                break;
            case 2:
                resultado += "<p>Iteración 2 (Resta): " + (num1 - num2) + "</p>";
                break;
            case 3:
                resultado += "<p>Iteración 3 (Multiplicación): " + (num1 * num2) + "</p>";
                break;
            case 4:
                if (num2 !== 0) {
                    resultado += "<p>Iteración 4 (División): " + (num1 / num2) + "</p>";
                } else {
                    resultado += "<p>Iteración 4 (División): No se puede dividir entre 0</p>";
                }
                break;
            case 5:
                if (num2 !== 0) {
                    resultado += "<p>Iteración 5 (Módulo): " + (num1 % num2) + "</p>";
                } else {
                    resultado += "<p>Iteración 5 (Módulo): No se puede calcular el módulo con 0</p>";
                }
                break;
        }
    }

    document.getElementById('result').innerHTML = resultado;
}