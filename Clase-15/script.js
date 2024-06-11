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



function calculadora() {
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
calculadora();
