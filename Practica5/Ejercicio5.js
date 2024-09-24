// Ejercicio 5: Clasificar usuario por edad y membresía del gimnasio

let edad = 30; // Edad del usuario
let membresia = "VIP"; // Tipo de membresía elegida (opciones: 'Básica', 'Estándar', 'VIP')

// Evaluación de la edad del usuario
if (edad < 18) {
    console.log("Eres menor de edad, puedes acceder a la membresía juvenil.");
} else if (edad >= 18 && edad <= 60) {
    console.log("Eres un adulto, puedes acceder a todas las membresías.");
} else {
    console.log("Eres mayor de 60 años, tienes descuentos en las membresías.");
}

// Uso de switch para determinar beneficios según la membresía seleccionada
switch (membresia) {
    case "Básica":
        console.log("Membresía Básica: Acceso a las áreas de entrenamiento estándar.");
        break;
    case "Estándar":
        console.log("Membresía Estándar: Acceso a todas las áreas de entrenamiento y clases grupales.");
        break;
    case "VIP":
        console.log("Membresía VIP: Acceso completo, con beneficios adicionales como spa y entrenadores personalizados.");
        break;
    default:
        console.log("Tipo de membresía no válido.");
}

// Descripción de la estructura utilizada:
// 1. Con el 'if', 'else if' y 'else', clasificamos al usuario según su edad.
// 2. El 'switch' evalúa el tipo de membresía seleccionada y muestra los beneficios correspondientes.