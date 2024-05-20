let tareas = [];

function mostrarMenu() {
    return prompt(
        "¿Que acción quiere realizar?\n" +
        "1. Agregar Tarea\n" +
        "2. Listar Tareas\n" +
        "3. Editar Tarea\n" +
        "4. Eliminar Tarea\n" +
        "5. Salir\n" +
        "Seleccione una opción:"
    );
}

function validarNombre(nombre) {
    let regex = /^\S(.*\S)?$/;
    return regex.test(nombre);
}

function agregarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea: ").trim();
    if (validarNombre(nombre)) {
        tareas.push(nombre);
        alert(`Tarea '${nombre}' agregada.`);
    } else {
        alert("Error: El nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
    }
}

function listarTareas() {
    if (tareas.length > 0) {
        let lista = "Lista de Tareas\n";
        for (let i = 0; i < tareas.length; i++) {
            lista += `${i + 1}. ${tareas[i]}\n`;
        }
        alert(lista);
    } else {
        alert("No hay tareas en la lista.");
    }
}

function editarTarea() {
    let nombreActual = prompt("Ingrese el nombre de la tarea a editar: ").trim();
    let found = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i] === nombreActual) {
            let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ").trim();
            if (validarNombre(nuevoNombre)) {
                tareas[i] = nuevoNombre;
                alert(`Tarea '${nombreActual}' actualizada a '${nuevoNombre}'.`);
            } else {
                alert("Error: El nuevo nombre de la tarea no puede estar vacío ni contener espacios vacíos al principio ni al final.");
            }
            found = true;
            break;
        }
    }
    if (!found) {
        alert(`Error: La tarea '${nombreActual}' no se encuentra en la lista.`);
    }
}

function eliminarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea a eliminar: ").trim();
    let index = tareas.indexOf(nombre);
    if (index !== -1) {
        tareas.splice(index, 1);
        alert(`Tarea '${nombre}' eliminada.`);
    } else {
        alert(`Error: La tarea '${nombre}' no se encuentra en la lista.`);
    }
}

function main() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch(opcion) {
            case '1':
                agregarTarea();
                break;
            case '2':
                listarTareas();
                break;
            case '3':
                editarTarea();
                break;
            case '4':
                eliminarTarea();
                break;
            case '5':
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida, por favor intente nuevamente.");
        }
    } while (opcion !== '5');
}

main();
