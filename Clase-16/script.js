/* function login() {
    while (true) {
const email = prompt("Introduce tu email:");
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(email)) {
        alert("El email ingresado no es válido.");
        continue; 
}
    const password = prompt("Introduce tu contraseña:");
    if (!password || password.length < 6 || !/[A-Z]/.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres, contener al menos una mayúscula y no puede ser nula.");
        continue;
}
    const usuario = {
        email: email,
        password: password
};
    alert(`Usuario ${email} registrado con éxito.`);
    return usuario;
}

}

const usuario = login();
console.log(usuario); 
 */


/* const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra


const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return !password && password.length > 6 && tieneMayuscula(password)
}

const login = () =>{
    const usuario = {
        email: null,
        password: null,
    }

    let email = prompt('ingrese un email')
while(!validacionEmail(email)){
    email = prompt('error email invalido: ingreselo nuevamente')
}
let password = prompt('La contraseña debe tener al menos 6 caracteres, contener al menos una mayúscula')
while(validacionPassword(password)){
    password = prompt('error contraseñ invalida')

}
usuario.password = password
alert(`usuario ${usuario.email} registrado`)


    return usuario
}

console.log(login()) */



/* function calculadora() {
    const operacionesDisponibles = ['+', '-'];
    let operacion;
do {
    operacion = prompt("Operaciones disponibles: +, -\nIngrese la operación:");
} while (!operacionesDisponibles.includes(operacion));

let numero1;
do {
    numero1 = parseFloat(prompt('ingrese el primer numero:'));
}while (isNaN(numero1));

let numero2;
do{
    numero2= parseFloat(prompt('ingrese el segundo numero'));
}while(isNaN(numero2));

let resultado;
if(operacion === '+'){
    resultado = numero1 + numero2;
}else if (operacion === '-'){
    resultado = numero1 - numero2;
}
alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`);
}
calculadora(); */





//localStorage y sessionStorage



/* localStorage.setItem('username', nombre)
 */
/* console.log(String({nombre: 'pepe'}))


const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user) )

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre) */


//JSON javascript object notation

//String escrito en formato JSON
'{"nombre": "pepe"}'

//parse permite trasnformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}'))
 */
//stringify

/* const producto = {
    nombre: 'tv samsung',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto) */


/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */
/* let usuarioRegistrado = login() */

/* const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra


const validacionEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validacionPassword = (password) =>{
    return !password && password.length > 6 && tieneMayuscula(password)
}

const login = () =>{
    const usuario = {
        email: null,
        password: null,
    }

    let email = prompt('ingrese un email')
while(!validacionEmail(email)){
    email = prompt('error email invalido: ingreselo nuevamente')
}
let password = prompt('La contraseña debe tener al menos 6 caracteres, contener al menos una mayúscula')
while(validacionPassword(password)){
    password = prompt('error contraseñ invalida')

}
usuario.password = password
alert(`usuario ${usuario.email} registrado`)


    return usuario
}


let usuarioRegistrado = login()
localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado)) */




function obtenerHistorial() {
    let historial = JSON.parse(localStorage.getItem('historial'));
    if (!historial) {
        historial = [];
        localStorage.setItem('historial', JSON.stringify(historial));
    }
    return historial;
}


function guardarEnHistorial(objeto) {
    let historial = obtenerHistorial();
    historial.push(objeto);
    localStorage.setItem('historial', JSON.stringify(historial));
}

const nuevoObjeto = { id: 1, nombre: 'Ejemplo' };
guardarEnHistorial(nuevoObjeto);


const historialCompleto = obtenerHistorial();
console.log(historialCompleto);