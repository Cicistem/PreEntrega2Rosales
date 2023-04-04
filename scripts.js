// Array de productos de calzado
let productos = [
    {categoria: "Zapatillas", marca: "Nike", nombre : "Air Max 270", precio: 80000},
    {categoria: "Botas", marca: "Timberland", nombre : "Premium", precio: 30000},
    {categoria: "Sandalias", marca: "Birkenstock", nombre : "Arizona", precio: 25000},
    {categoria: "Zapatillas", marca: "Adidas", nombre : "Superstar", precio: 60000}
  ];

  function filtrarCalzadosPorPrecioMenorA(userInput, productos) {
    const precioMaximo = parseFloat(userInput);
    if (isNaN(precioMaximo)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
    const calzadosFiltrados = productos.filter(function(producto) {
      return producto.precio <= precioMaximo;
    });
    if (calzadosFiltrados.length === 0) {
      alert("No se encontraron productos con precios menores o iguales a $" + precioMaximo);
      return;
    }
    let mensaje = "Los siguientes productos tienen un precio menor o igual a $" + precioMaximo + ":\n\n";
    calzadosFiltrados.forEach(function(producto) {
      mensaje += producto.nombre + " - $" + producto.precio + "\n";
    });
    alert(mensaje);
  }
  const userInput = prompt("Ingrese el precio máximo que desea pagar:");
filtrarCalzadosPorPrecioMenorA(userInput, productos);
  
  // Función para agregar productos al carrito y calcular el precio total
  function agregarProducto() {
    let carrito = [];
    let total = 0; 
  
    // Bucle para agregar productos
    while (true) {
      let producto = prompt("Ingrese el nombre del producto (Air Max 270, Premium, Arizona, Superstar)o presione Cancelar para finalizar):");
      if (producto === null) {
        break; //Sale del bucle
      }
  
      // Busca el producto
      let productoEncontrado = productos.find(function(elemento) {
        return elemento.nombre === producto;
      });
  
      // Si el producto no esta en el array, muestra un mensaje de error 
      if (!productoEncontrado) {
        alert("El producto ingresado no está disponible en nuestra tienda. Inténtelo de nuevo.");
        continue;
      }
  
      // AAgrega el producto y actualiza el precio
      carrito.push(productoEncontrado);
      total += productoEncontrado.precio;
    }
  
    // Muestra los productos
    console.log("Productos en el carrito:");
    for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i].marca + " " + carrito[i].nombre + ": $" + carrito[i].precio);
    }
    alert("Precio total: $" + total);
  }
  
  // llama a la funcion para iniciar una nueva interaccion
  agregarProducto();
  