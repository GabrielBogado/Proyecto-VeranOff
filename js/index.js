let acceso = confirm("¿Usted es vendedor?");
if (acceso) {
  console.log("A CONTINUACION COMENZARA A AGREGAR PRODUCTOS");
  agregarProducto();
} else {
  let nombrePers = prompt(
    "Ingrese su nombre para una asistencia personalizada: "
  );
  console.log("Bienvenid@", nombrePers);
  let eleccion = parseInt(
    prompt(
      "¿Que esta buscando para combatir el Verano ?: \n1) Aire Acondicionado \n2) Ventilador \n3) Salir"
    )
  );
  if (eleccion >= 1 && eleccion <= 2) {
    console.log("Su eleccion fue:", eleccion);
    menu(eleccion);
  } else {
    let salida = confirm("¿Esta seguro que desea Salir?");
    if (salida) {
      console.log("Gracias por su visita !");
    } else {
      return inicio();
    }
      } else {
        inicio();
      }
      break;
    case 2:
      let venti = parseInt(
        prompt(
          "Que tipo de ventilador quiere?: \n1) Ventilador de pie \n2) Ventilador de techo \n3) Ventilador de pared \n4) Ventilador 3 en 1 \n5) Volver al menu"
        )
      );
      if (venti == 1) {
        console.log("Usted selecciono ventilador de pie");
      } else if (venti == 2) {
        console.log("Usted selecciono ventilador de techo");
      } else if (venti == 3) {
        console.log("Usted selecciono ventilador de pared");
      } else if (venti == 4) {
        console.log("Usted selecciono ventilador 3 en 1");
      } else {
        inicio();
      }
  }
}

function agregarProducto() {
  let nombre = prompt("Ingrese nombre del producto:").toUpperCase();
  let precio = parseInt(prompt("Ingrese precio:"));
  let stock = parseInt(prompt("Ingrese stock disponible:"));
  let tipo = prompt("Ingrese tipo de producto").toUpperCase();

  productos.push(new Producto(nombre, precio, stock));
  let seguirAgregando = confirm("¿Desea seguir agregando productos?");
  if (seguirAgregando) {
    agregarProducto();
  } else {
    listarProductos();
  }
}

function listarProductos() {
  console.table(productos);
}
