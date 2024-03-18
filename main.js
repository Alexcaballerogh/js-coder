
const PI = Math.PI;

let dimensionesRectangulo = [];
let dimensionesCuadrado = [];
let dimensionesCirculo = [];

function calcularAreaRectangulo(dimensions) {
    return dimensions[0] * dimensions[1];
}

function calcularAreaCuadrado(dimensions) {
    return dimensions[0] * dimensions[0];
}


function calcularAreaCirculo(dimensions) {
    return Math.PI * dimensions[0] * dimensions[0];
}


function calcularMetrosCuadrados() {
    let opcion = "";
    
    while (opcion !== "salir") {
        confirm("Elige una opción:\n\n" +
              "1. Calcular área de un rectángulo\n" +
              "2. Calcular área de un cuadrado\n" +
              "3. Calcular área de un círculo\n" +
              "salir para terminar");

        opcion = prompt("Ingrese su opción:");
     
        switch (opcion) {
            case "1":
                let baseRectangulo = Number(prompt("Ingrese la base del rectángulo:"));
                let alturaRectangulo = Number(prompt("Ingrese la altura del rectángulo:"));
                let dimensionesRectangulo = [baseRectangulo, alturaRectangulo];
                alert("El área del rectángulo es: " + calcularAreaRectangulo(dimensionesRectangulo));
                break;
            case "2":
                let ladoCuadrado = Number(prompt("Ingrese el lado del cuadrado:"));
                let dimensionesCuadrado = [ladoCuadrado];
                alert("El área del cuadrado es: " + calcularAreaCuadrado(dimensionesCuadrado));
                break;
            case "3":
                let radioCirculo = Number(prompt("Ingrese el radio del círculo:"));
                let dimensionesCirculo = [radioCirculo];
                alert("El área del círculo es: " + calcularAreaCirculo(dimensionesCirculo));
                break;
            case "salir":
                alert("¡Nos vemos pronto!");
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción válida.");
                break;
        }
    }
}


calcularMetrosCuadrados();
