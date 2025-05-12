const TASA_CAMBIO = 1300; // 1 USD = 1300 ARS
const history = [];

function convertCurrency(pesos) {
  return pesos / TASA_CAMBIO;
}

function mostrarMenu() {
  return prompt(
    "Seleccione una opción:\n" +
    "1) Divisa (ARS -> USD)\n" +
    "2) Salir"
  );
}

function registrarOperacion(entrada, salida) {
  const operacion = {
    tipo: 'divisa',
    entrada: `${entrada} ARS`,
    salida: `${salida.toLocaleString()} USD`,
    fecha: new Date().toLocaleString()
  };
  history.push(operacion);
}

function iniciarApp() {
  let opcion;
  do {
    opcion = mostrarMenu();

    if (opcion === "1") {
      let monto = prompt("Ingrese el monto en ARS:");
      let montoNum = parseFloat(monto);

      if (isNaN(montoNum) || montoNum <= 0) {
        alert("Por favor, ingrese un valor numérico válido mayor a 0.");
        continue;
      }

      const resultado = convertCurrency(montoNum);
      alert(`Equivale a: ${resultado.toFixed(2)} USD`);
      registrarOperacion(montoNum, resultado);
    } else if (opcion !== "2") {
      alert("Opción inválida. Intente nuevamente.");
    }

  } while (opcion !== "2");

  console.log("Historial de conversiones:");
  console.log(history);
}

iniciarApp();

