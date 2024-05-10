let cantidadArticulos = parseInt(prompt('Ingrese la cantidad de artículos:'));
let precioTotal = parseInt(prompt('Ingrese el precio total:'));
if (isNaN(cantidadArticulos) || isNaN(precioTotal)) {
    console.log('Error: Ingrese valores numéricos válidos.');
if (cantidadArticulos < 1 || precioTotal < 1) {
    console.log('Error: La cantidad de artículos y el precio total deben ser mayores o iguales a 1.');
} else {
    if (cantidadArticulos >= 10 && precioTotal > 20000) {
        let precioConDescuento = precioTotal * 0.85;
        console.log('Se aplicó un descuento del 15%.');
        console.log('Cantidad a pagar con descuento: $' + precioConDescuento.toFixed(2));
    } else {
        if(cantidadArticulos >=10 || precioTotal < 20000){
            console.log("No se supero el precio Total.");
        }else{
            if(cantidadArticulos < 10 || precioTotal > 20000){
            console.log("No se alcanzo la cantidad de articulos requeridos.");
        } else {
        console.log('No se cumplio ningún requisito.');
        console.log('Cantidad a pagar: $' + precioTotal.toFixed(2));
        }
    }
}

