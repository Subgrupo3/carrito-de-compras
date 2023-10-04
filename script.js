// Variables para el carrito
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");
    
    carritoElement.innerHTML = "";
    carrito.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        carritoElement.appendChild(listItem);
    });
    
    totalElement.textContent = total.toFixed(2);
}
