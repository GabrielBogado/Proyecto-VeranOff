debugger
let nombre = prompt("Ingrese su nombre para una asistencia personalizada: ")

inicio()

function inicio () {
    console.log("Bienvenid@", nombre)
    let eleccion = parseInt(prompt("¿Que esta buscando para combatir el Verano ?: \n1) Aire Acondicionado \n2) Ventilador \n3) Salir"))
        if(eleccion>=1 && eleccion<=2){
            console.log("Su eleccion fue:", eleccion)
            menu(eleccion)

        }else{
            let salida = confirm("¿Esta seguro que desea Salir?")
            if(salida){
                console.log("Gracias por su visita !")
            }else{
                return inicio()
            }
        }

}


function menu(opcion) {
    switch(opcion){
        case 1: let aire = parseInt(prompt("Que tipo de aire acondicionado quiere?: \n1) Aire Ventana \n2) Aire Splite \n3) Volver al menu"))
            if(aire>=1 && aire<=2){
                console.log("eleccion del aire / menu")
            }else {
                return inicio()
            }
        break
        case 2: let venti = parseInt(prompt("Que tipo de ventilador quiere?: \n1) Ventilador de pie \n2) Ventilador de techo \n3) Ventilador de pared \n4) Ventilador 3 en 1 \n5) Volver al menu"))
            if(venti>=1 && venti<=4){
                console.log("eleccion de ventiladores")
            }else {
                return inicio()
            }
    }
}

