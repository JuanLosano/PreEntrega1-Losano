
const TASA_INTERES_ANUAL = 30; 


const FRECUENCIA_CAPITALIZACION = 12; 


function calcularPlazoFijo(montoInicial, duracionMeses) {
    
    const tasaMensual = TASA_INTERES_ANUAL / FRECUENCIA_CAPITALIZACION / 100;

    let montoFinal = montoInicial;

    
    for (let mes = 1; mes <= duracionMeses; mes++) {
        montoFinal += montoFinal * tasaMensual;
    }

    return montoFinal;
}


function plazoFijo() {
    const montoInicial = parseFloat(prompt("Ingrese el monto inicial:"));
    let duracionMeses;

    
    while (true) {
        duracionMeses = parseInt(prompt("Ingrese la duración del plazo fijo en meses:"));

        if (!isNaN(duracionMeses) && duracionMeses > 0) {
            break;
        } else {
            alert("Por favor, ingrese un número de meses válido y mayor que cero.");
        }
    }

    
    const montoFinal = calcularPlazoFijo(montoInicial, duracionMeses);

    // Mostramos el monto final al usuario
    alert(`El monto final del plazo fijo después de ${duracionMeses} meses es: $${montoFinal.toFixed(2)}`);
}


plazoFijo();
