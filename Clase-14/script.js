//arrays 
//lista de elementos ordenados

/* let nombre1 = 'pepe'
let nobre2 = 'juan'
let nombre3 = 'ezequiel' */

/* //posicicion/index 0        1        2
const nombres = ['pepe', 'juan', 'ezequiel'] */



/* console.log(nombres[1])
console.log('tengo ' + nombres.length + ' nombres') */


//metodos de array

//array.pop()
//array.push()

// .push(): agrega un elemento al final del array y devuelve la nueva longitud

/* 
nombres.push('maria') */

//unshift()
/* nombres.unshift('maria')

console.log(nombres) */



//pop():elimina el ultimo elemento y lo retorna

/* let ultimoElemento = nombres.pop()
console.log(ultimoElemento) */

//shift():elimina el primer elemento y lo retorna

//SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
//.indexOf(): devuelve la posicion de un string en el array

/* let posiciondeJuan = nombres.indexOf('juan')
console.log('la posicion de juan es ' + posiciondeJuan) */



//.splice()
/*  
1er parametro:
-desde donde va posicionado
2do parametro:
-cantidad de elementos que se quieran eliminar
3er parametro:
-Elementos a agregar
*/


/* nombres.splice(posiciondeJuan, 1) */




/* const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']
let posicionDeEzequiel = nombres2.indexOf('ezequiel')

console.log('la posicion de ezequiel es '+ posicionDeEzequiel)

const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 2)

console.log(nombres2)
console.log('la lista de elementos eliminados es ', listaDeEliminados) */






//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril
//REGLAS:
//-No se puede mirar el array
//-Si van a poder usar consola

/* let posicionDeLeonel = nombres3.indexOf('leonel')
let posicionDeEzequiel = nombres3.indexOf('ezequiel')
let posicionDeAbril = nombres3.indexOf('abril')

nombres3.splice(posicionDeEzequiel, 1)
nombres3.splice(posicionDeLeonel, 1)
nombres3.splice(posicionDeAbril,0,'sofia')

console.log(nombres3) */

/* console.log(nombres3.includes('leonel')) */

/* const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'lucas', 'julieta', 'abril', 'lautaro']
 */

/* for(let index = 0; index < nombres3.length; index = index + 1){
    console.log(nombres3[index])
} */

/* for(let nombre of nombres3){
    console.log(nombre)
} */



/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/


/* let caracteres = 0
for(let index = 0; index < nombres3.length; index = index + 1){
    caracteres = caracteres + nombres3[index].length
}

console.log('la cantidad de caracteres es: ' + caracteres) */


//dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

/* const array = ['pepe', 'lucas', 'PEDRO', 'Juan'] */

//esto debe generar un segundo array con ['PEDRO', 'Juan']

/* const nombres = ['pepe', 'lucas', 'PEDRO', 'JuaN'];

const estaEnMinuscula = (str) => {
    return str == str.toLowerCase()
}

const tieneMayuscula = (str) =>{
    return !estaEnMinuscula(str)
}

const mayusculas = [];
for (let nombre of nombres){
    if (tieneMayuscula(nombre)){
        mayusculas.push(nombre);
    }
}
console.log(mayusculas); */

/* const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
] */


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */


/* const samsung = [];

for (const producto of productos) {
    if (producto.marca === 'samsung') {
        samsung.push(producto);
    }
}

console.log(samsung); */


const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

/* const samsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}
console.log(samsung) */

/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/



function buscarProducro(busqueda){
    const arrayProductos = []
    for(let producto of productos){
        if(producto.title.includes(busqueda)){
            arrayProductos.push(producto)
        }
    }
    return arrayProductos;
}

console.log(buscarProducro('tv'));
console.log(buscarProducro('lg'));