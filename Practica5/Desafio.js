// Función que calcula el descuento basado en la categoría del cliente y el total de compra
function aplicarDescuento(categoria, totalCompra) {
    let descuento = 0;

    // Condiciones de descuento según la categoría
    if (totalCompra > 100) {
        switch (categoria.toLowerCase()) {
            case "regular":
                descuento = 0.05; // 5% de descuento para clientes regulares
                break;
            case "premium":
                descuento = 0.10; // 10% de descuento para clientes premium
                break;
            case "vip":
                descuento = 0.20; // 20% de descuento para clientes VIP
                break;
            default:
                console.log("Categoría no válida.");
                return totalCompra; // Si la categoría no es válida, se devuelve el total sin descuento
        }
    } else {
        console.log("No se aplica descuento, la compra es menor a $100.");
        return totalCompra; // Si la compra es menor a $100, no se aplica descuento
    }

    // Calculamos el nuevo total con el descuento aplicado
    const totalConDescuento = totalCompra - (totalCompra * descuento);
    console.log(`Descuento aplicado: ${descuento * 100}%`);
    return totalConDescuento;
}

// Ejemplo de uso
const categoriaCliente = "VIP"; // Puedes cambiar la categoría a "regular", "premium" o "vip"
const totalDeCompra = 150; // Cambia el total de compra para probar distintos escenarios

const totalFinal = aplicarDescuento(categoriaCliente, totalDeCompra);
console.log(`Total final después del descuento: $${totalFinal}`);
