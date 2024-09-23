// Función que simula una solicitud de datos
function solicitarDatosDelServidor() {
    let exito = true; // Simula si la solicitud es exitosa o no

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                // Si la solicitud tiene éxito, se resuelve con los datos
                resolve({
                    id: 1,
                    nombre: 'Ashely Molina',
                    edad: 19,
                });
            } else {
                // Si la solicitud falla, se rechaza con un mensaje de error
                reject("Error al obtener los datos del servidor");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Consumo de la promesa
solicitarDatosDelServidor()
    .then((datos) => {
        console.log("Datos recibidos:", datos); // Mostrará los datos si la solicitud tiene éxito
    })
    .catch((error) => {
        console.error(error); // Mostrará el error si la solicitud falla
    });

