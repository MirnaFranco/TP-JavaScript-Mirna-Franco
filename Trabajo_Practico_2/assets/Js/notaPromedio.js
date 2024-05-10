let nota1 = parseInt(prompt('Ingrese la nota del primer trimestre (1-10):'));
let nota2 = parseInt(prompt('Ingrese la nota del segundo trimestre (1-10):'));
let nota3 = parseInt(prompt('Ingrese la nota del tercer trimestre (1-10):'));
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
    {
    alert("Ingrese un valor distinto a vacio o igual a un número")
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;
    switch (true) {
        case promedio >= 1 && promedio <= 3:
            console.log('Nota Insuficiente');
            break;
        case promedio >= 4 && promedio <= 5:
            console.log('Nota Regular');
            break;
        case promedio >= 6 && promedio <= 7:
            console.log('Nota Buena');
            break;
        case promedio >= 8 && promedio <= 9:
            console.log('Nota Muy Buena');
            break;
        case promedio === 10:
            console.log('Nota Sobresaliente');
            break;
        default:
            console.log('Error:ingrese un valor entre 1 y 10.');
    }
}
