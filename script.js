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

function toggleText(event) {
    // Obtener el id del botón que se hizo clic
    const buttonId = event.target.id;
    // Obtener el número del botón (último carácter del id)
    const buttonNumber = buttonId.substring(buttonId.lastIndexOf("_") + 1);

    // Obtener el elemento de texto oculto correspondiente
    const hideText = document.getElementById(`hideText_${buttonNumber}`);

    // Toggle para mostrar u ocultar el texto
    hideText.classList.toggle('show');
}

// Agregar eventos de clic a todos los botones "Ver más"
const hideTextButtons = document.querySelectorAll('[id^="hideText_btn"]');
hideTextButtons.forEach(button => {
    button.addEventListener('click', toggleText);
});
