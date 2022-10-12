const IVA = 1.21
class Producto {
    constructor(nombre, precio, stock, tipo){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.tipo = tipo
    }
    precioFinal(){
        return this.precio * IVA
    }
    nombreUC(){
        return this.nombre.toUpperCase()
    }
}