const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));
if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log("Los números en orden ascendente son: " + num1 + ", " + num2 + ", " + num3);
    } else {
        console.log("Los números en orden ascendente son: " + num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log("Los números en orden ascendente son: " + num2 + ", " + num1 + ", " + num3);
    } else {
        console.log("Los números en orden ascendente son: " + num2 + ", " + num3 + ", " + num1);
    }
} else {
    if (num1 <= num2) {
        console.log("Los números en orden ascendente son: " + num3 + ", " + num1 + ", " + num2);
    } else {
        console.log("Los números en orden ascendente son: " + num3 + ", " + num2 + ", " + num1);
    }
}
