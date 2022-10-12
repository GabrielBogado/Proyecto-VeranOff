function separador() {
  let acceso = confirm("¿Usted es vendedor?");
  if (acceso) {
    console.log("A CONTINUACION COMENZARA A AGREGAR PRODUCTOS");
    agregarProducto();
  } else {
    cliente();
  }
}

separador();

function cliente() {
  let nombrePers = prompt(
    "Ingrese su nombre para una asistencia personalizada: "
  );
  console.log("Bienvenid@", nombrePers);
  let eleccion = prompt(
    "¿Que esta buscando para combatir el Verano ?: \n- Aire Acondicionado \n- Ventilador \n- Salir"
  ).toUpperCase();
  if (eleccion == "SALIR") {
    let salida = confirm("¿Seguro que desea salir?");
    if (salida) {
      console.log("GRACIAS POR SU VISITA");
      separador();
    } else {
      cliente();
    }
  } else {
    let resultado = productos.filter((elemento) =>
      elemento.tipo.includes(eleccion)
    );
    console.table(resultado);
  }
}

function agregarProducto() {
  let nombre = prompt("Ingrese nombre del producto:").toUpperCase();
  let precio = parseInt(prompt("Ingrese precio:"));
  let stock = parseInt(prompt("Ingrese stock disponible:"));
  let tipo = prompt("Ingrese tipo de producto").toUpperCase();

  productos.push(new Producto(nombre, precio, stock, tipo));
  let seguirAgregando = confirm("¿Desea seguir agregando productos?");
  if (seguirAgregando) {
    agregarProducto();
  } else {
    listarProductos();
    separador();
  }
}

function listarProductos() {
  console.table(productos);
}
