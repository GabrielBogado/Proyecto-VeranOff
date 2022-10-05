debugger
const IVA = 1.21




class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioFinal(){
        return this.precio * IVA
    }
    nombreUC(){
        return this.nombre.toUpperCase()
    }
}

function agregarProducto(){
    let nombre = prompt("Ingrese nombre del producto:")
    let precio = parseInt(prompt("Ingrese precio:"))
    let stock = parseInt(prompt("Ingrese stock disponible:"))

    const producto1 = new Producto(nombre, precio, stock)
    console.log(producto1)
}


agregarProducto()