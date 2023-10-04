document.addEventListener("DOMContentLoaded", function() {
  let agregarCelular = document.getElementById("agregarCelular")
  let agregarComputadora = document.getElementById("agregarComputadora")
  let agregarTablet = document.getElementById("agregarTablet")
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
  tabla.getElementsByTagName('tbody')[0].appendChild(producto);

  }})



  agregarCelular.addEventListener("click", function() {
    agregarProducto(document.getElementById("celular")).textContent, 
    document.getElementById("descripcionCelular").textContent, 
    document.getElementById("precioCelular").textContent;
 });

  agregarComputadora.addEventListener("click", function() {
    agregarProducto(document.getElementById("computadora")).textContent, 
    document.getElementById("descripcionComputadora").textContent, 
    document.getElementById("precioComputadora").textContent;
  });

  agregarTablet.addEventListener("click", function() {
    agregarProducto(document.getElementById("tablet")).textContent, 
    document.getElementById("descripcionTablet").textContent, 
    document.getElementById("precioTablet").textContent;
});

;

document.addEventListener("DOMContentLoaded", function() {
  let formulario = document.getElementById("formularioCliente");
  let nombreCliente = document.getElementById("nombreCliente");
  let rutCliente = document.getElementById("rutCliente");
  let productoSelect = document.getElementById("producto");


formulario.addEventListener("submit", function(event) {
  // Obtenemos el valor del RUT y el nombre del cliente
  let rut = rutCliente.value;
  let nombre = nombreCliente.value;
//Comprobamos si el cliente ingresó un RUT.
  if (rut !== " ") {
    alert("RUT: " + rut + "Nombre " + nombre);

  } else {
    alert ("Cliente: Consumidor Final");
  }

})

})




