




/* 
crear una funcin que dado 3 valores nos devuelva la sumatoria


*/
/* //1 
function CalcularSumatoria(a, b, c){
    let sumatoria = a + b + c
    return sumatoria
}
console.log(CalcularSumatoria(1, 1, 1))

//2
function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
console.log(mayor(10, 5))

//3
function generarEmail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
 */

/* 
crear una funcin que dado 3 valores nos devuelva la sumatoria

*/

/* const calcularSumatoria = (a, b, c) => {
    return a + b + c
} */

const calcularSumatoria = (a, b, c) => {
    return a + b + c
}

console.log(calcularSumatoria(1, 2, 3))

/* 
validar string
*/
/* 
const salicitar_y_validar_string = () =>{
    let stringSolicitado = prompt('ingrese un dato')
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('ERROR: Dato ingresado debe ser un string')
        stringSolicitado = prompt('ingrese otro dato nuevamente')
    }
    return stringSolicitado
} */


/* 
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS
function mayor(a, b){
    if(a > b){
        return a
    } else{
        return b
    }
}
function generarMail(nombreDeUsuario){
    return String(nombreDeUsuario + '@gmail.com')
}
function sumar(a, b){
    a = Number(a)
    b = Number(b)
    return a + b + undefined
}
*/

const sumatoria = (a , b) => a + b 

const mayor = (a, b) =>{
    if(a > b){
        return a;
    } else {
        return b;
    }
}

const generarGmail = (nombreDeUsuario) => nombreDeUsuario + '@gmail.com'