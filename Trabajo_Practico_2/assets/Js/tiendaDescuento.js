let cantidadArticulos = parseInt(prompt('Ingrese la cantidad de artículos:'));
let precioTotal = parseInt(prompt('Ingrese el precio total:'));
if (isNaN(cantidadArticulos) || isNaN(precioTotal)) {
    console.log('Error: Ingrese valores numéricos válidos.');
if (cantidadArticulos <= 1 || precioTotal <= 1) {
    console.log('Error: La cantidad de artículos y el precio total deben ser mayores a 1.');
} else {
    if (cantidadArticulos >= 10 && precioTotal > 20000) {
        let precioConDescuento = precioTotal * 0.85;
        console.log('Se aplicó un descuento del 15%.');
        console.log('Cantidad a pagar con descuento: $' + precioConDescuento.toFixed(2));
    } else {
        console.log('No se aplica descuento.');
        console.log('Cantidad a pagar: $' + precioTotal.toFixed(2));
    }
}
}
