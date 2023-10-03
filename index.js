document.addEventListener("DOMContentLoaded", function() {
  let agregarCelular = document.getElementById("agregarCelular");
  let agregarComputadora = document.getElementById("agregarComputadora");
  let agregarTablet = document.getElementById("agregarTablet");
  let tabla = document.getElementById("tablaCarrito");

  function agregarProducto(nombre, descripcion, precio) {
    var producto = document.createElement("tr");

    // Crear y agregar celdas (td) para cada dato del producto
    var celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;

    var celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = descripcion;

    var celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = precio;

    // Agregar las celdas a la fila (tr)
    producto.appendChild(celdaNombre);
    producto.appendChild(celdaDescripcion);
    producto.appendChild(celdaPrecio);

    // Agregar la fila (producto) a la tabla (tablaCarrito)
    tabla.appendChild(producto);
  }



  agregarCelular.addEventListener("click", function() {
    agregarProducto(document.getElementById("nombreCelular").textContent, document.getElementById("descripcionCelular").textContent, document.getElementById("precioCelular"));
  });

  agregarComputadora.addEventListener("click", function() {
    agregarProducto(document.getElementById("nombreC"), document.getElementById("descripcionTablet"), document.getElementById("precioTablet"));
  });

  agregarTablet.addEventListener("click", function() {
    agregarProducto(document.getElementById("nombreTablet"), document.getElementById("descripcionTablet"), document.getElementById("precioTablet");
  });

});




