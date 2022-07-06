alert ("¡Hola! Esta es una calculadora de cuotas.");

document.write(" ---- RESULTADOS ---- ");

let valorIngresado = parseFloat(prompt("Ingrese el Valor Total de su Compra"));
let cuotasIngresadas = parseInt(prompt("Ingrese la Cantidad de Cuotas"));
let interésMensual = parseFloat(prompt("Ingrese el interés, convirtiendolo a número decimal. Por ejemplo si su interés es del 15%, ingrese 0.15. (en vez de una coma, use un punto) De no haber alguno, ingrese 0 (cero)."));

function calcuEnCuotas (valor= 0, cuotas=1, interés=0) {
    return (valor * interés + valor) / cuotas;  
}

if (interésMensual >= 0 && interésMensual < 1 && valorIngresado >= 0 && cuotasIngresadas >= 1) {
    alert("Su cantidad a pagar en " + cuotasIngresadas + " meses es de " + calcuEnCuotas(valorIngresado, cuotasIngresadas, interésMensual) + " pesos argentinos." )
    document.write("Su cantidad a pagar en " + cuotasIngresadas + " meses es de " + calcuEnCuotas(valorIngresado, cuotasIngresadas, interésMensual) + " pesos argentinos." )

    let a = calcuEnCuotas(valorIngresado, cuotasIngresadas, interésMensual);
    let i = cuotasIngresadas;
    do {
        alert("Le recomendamos que pague mensualmente de la siguiente forma: " + (a + (a / 10)) + ". Esto debido a la posible depreciación monetaria." );
        document.write(" Le recomendamos que pague mensualmente de la siguiente forma: " + (a + (a / 10)) + ". Esto debido a la posible depreciación monetaria." );
    } while (i - cuotasIngresadas);

}else {
    alert("Ingrese un número de valor, de cuota o interés calculable.")
    document.write("Ingrese un número de valor, de cuota o interés calculable.")
}