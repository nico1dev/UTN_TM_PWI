/* Operadores logicos */
/* 
! NOT => negacion (devuelve elvalor opuesto booleano del dato)

|| OR => o logico (selecciona entre dos valores)

&& AND => y logico

*/


/* 
solicitar al usuario una edad y un lenguaje favorito
Si su edad es mayor a 16 y su lenguaje favortio es 'JS' 
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/

let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')
if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}else{
    console.log('No se puede ser perfecto en todo')
}