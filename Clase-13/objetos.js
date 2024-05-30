/* tipos de datos objetos */


let edadUsuario = 19

let nombreDeUsuario = 'pepe'

let apellidoUsuario = 'suarez'


//Formato key-value
let usuario ={
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'suarez',
    'mejor amigo': {
        "nombre": 'juan',
    }
}
console.log(usuario)

/* 
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/

/* 
usamos string para escribir propiedades en caso de que tengan espacios o tildes o - o 'ñ'
*/

let objeto ={
    'precio': 500.000,
    'nombre': 'play station 5',
    'marca': 'Sony',
    'id': 19.00,
    'descripcion': 'es una consola de videojuegos',
}

console.log('hola ' + objeto['nombre'])



const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}

/* 
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/

console.log('El usuario ' + user['name'] + ' ' +user['lastname'] + ' tiene las preferancias de usuario en ' + '\n' + user['user preferences']['theme'] + '\n' + user['user preferences']['lang'])



/* 'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}' */

console.log('El usuario ' + user['name'] +' '+ user['lastname'] + ' creo su cuenta en fecha ' + user['user info']['created_at'] + ' vive en ' + user['user info']['adress'] + ' y su telefono es ' + user['user info']['tel'])


/* PASAR LOS MENSAJES DE CONSOLA A TEMPLATE STRING */

console.log(`
El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
-Modo: ${user['user preferences']['theme']}
-lenguaje: ${user['user preferences']['lang']}
`)

console.log(`
El usuario ${user['name']} ${user['lastname']} creo au cuenta de fecha en:
-fecha: ${user['user info']['created_at']} vive en:
-locacion: ${user['user info']['adress']} y su telefono es:
-telefono: ${user['user info']['tel']}
`)

console.log(`
    El usuario ${user.name} ${user.lastname} tiene las preferencias en:
    -Modo: ${user['user preferences'].theme}
    -Lenguaje: ${user['user preferences'].lang}
`)


/* 

Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
} 


*/

/* const calcularIva = (precio, tipo_factura) => {
    if(tipo_factura === 'c' || tipo_factura === 'b'){
        return {
            precio: precio * 1.21,
            iva: precio * 0.21,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    } else if(tipo_factura === 'a'){
        return {
            precio: precio,
            iva: precio * 0.21,
            precioConIva: precio * 1.21,
            factura: tipo_factura
        }
    }
} */

const calcularIva = (precio, tipo_factura) =>{
    let iva  = precio * 0.21

    const resultado = {
        precio: null,
        iva: iva,
        percioConIva: precio + iva,
        factura: tipo_factura
        }
        if(tipo_factura == 'C' || tipo_factura == 'B'){
            resultado.prercio = precio + iva
        }
        return resultado
}

HTMLFormControlsCollection.log(calcularIva )