/* WHILE
el bucle while repite un bloque de codigo mientras se cumpla x consicion

*/


/* let number = pront('ingrese un numero')

while(!number || isNaN(numero)){
    alert('NO ingresa un dato numerico')
    numero = pront('ingresa un dato numerico por favor')
} */



/* 
Solicitar un string al usuario y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto el NaN)
*/

/* 
let texto= pront ('ingrese una palabra')
while(!texto || !isNaN(texto)){
    alert('no ingreso un dato valido')
    texto = pront ('ingrese una palabra')
}

 */

//FOR
/* Es un bucle que usamos cuando queremos repetir un bloque de codigo unda cantidad determinada de veces */

/* di por consola 5 hola mundo */


//DRY = dont repeat yourself
/* console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo') 
*/


// inicio         ; limite     ; ritmo de actualizacion
/* for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('hola mundo' + iterador)
}
 */



/* for(let nombre = 1; nombre <= 3; nombre = nombre + 1){
    let nombre = pront('Ingrese un nombre')
    alert(nombre)
}
 */


/* let listaDeNumeros = ''
let sumaNumeros = 0
for (let i = 1 ; i <= 3 ; i = i + 1) {
    let numero = Number(prompt("Escribir un numero"))
    listaDeNumeros = listaDeNumeros + "\n" + numero
    sumaNumeros = sumaNumeros + numero
}
alert(listaDeNumeros)
alert(sumaNumeros) */

/* 
vamos a solicitar al usuario una cantidadDeRepeticiones
vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
validar que la cantidadDeRepeticiones ingresada sea un numero, en caso de que no volver a solicitarlo
 */

/* let sumatoria=0
let cantidad = prompt('Ingrese una cantidad de repeticiones')
while(!cantidad || isNaN(cantidad)){
    alert('Error, dato no valido')
    cantidad = prompt('Ingrese nuevamente una cantidad de repeticiones')
}
for(let i=1;i<=cantidad;i++){
    let numero=prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        alert('Error, dato no valido')
        numero = prompt('Ingrese nuevamente un numero')
    }
    sumatoria= sumatoria + Number(numero)
}
alert('La sumatoria es: '+sumatoria) */

//FUNCIONES 
//Declarar una funcion
/* function saludar(nombre){
    alert('hola a ' + nombre)
} */


//invocar una funcion
/* saludar('pepe')
saludar('juan')
 */

/* 
Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola el resultadod de la suma de ambos numeros
*/

/* function sumar(numero_1 , numero_2){
    let suma = numero_1 + numero_2
    console.log(suma)
} */

/* 
Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio
ej: calcularIva(100) => console: 21
*/

function validarNumero (){
    let numero = prompt('ingrese un numero')
    while (!numero || isNaN(numero)){
        alert('El dato debe ser un numero')
    numero = prompt('ingrese el numero; ')
    }
    return Number(numero)
}

let cantidadDeRepeticiones = solicitarYValidarNumero()
let suma = 0

for(let iteracion = 1; iteracion <=)


/* let sumatoria=0
let cantidad = prompt('Ingrese una cantidad de repeticiones')
while(!cantidad || isNaN(cantidad)){
    alert('Error, dato no valido')
    cantidad = prompt('Ingrese nuevamente una cantidad de repeticiones')
}
for(let i=1;i<=cantidad;i++){
    let numero=prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        alert('Error, dato no valido')
        numero = prompt('Ingrese nuevamente un numero')
    }
    sumatoria= sumatoria + Number(numero)
}
alert('La sumatoria es: '+sumatoria) */

