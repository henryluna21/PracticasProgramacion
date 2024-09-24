// Función que simula el procesamiento de un pedido de comida
function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando el pedido: ${pedido}...`);

        // Simulamos un tiempo de procesamiento del pedido (2 segundos)
        setTimeout(() => {
            const exito = Math.random() > 0.2; // 80% de probabilidad de éxito

            if (exito) {
                resolve(`Pedido de ${pedido} completado con éxito.`);
            } else {
                reject(`Error al procesar el pedido de ${pedido}.`);
            }
        }, 2000);
    });
}

// Simulamos un pedido de comida
procesarPedido("Pizza Margherita")
    .then((mensajeExito) => {
        
        console.log(mensajeExito); // Si el pedido tiene éxito
    })
    .catch((mensajeError) => {
        console.error(mensajeError); // Si el pedido falla
    });
