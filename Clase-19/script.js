/* const alertar = () =>{
    alert('hola mundo')
} */
/* 
const btn2HTML = document.getElementById('btn-2') */



/* btn2HTML.onclick = alertar */

//llamar un elemento por clase
/* const btn3HTML = document.querySelector('.btn-3') */

/* btn3HTML.addEventListener('click', alertar) */
/* btn3HTML.addEventListener('mouseover', alertar)
 */

/* 
en html tendremos un numero que se mostrara en un span, dicho numero sera inicialmente 1
devemos crear el numero medisnte js
habra un boton <button>+<button>
cuando ese boton sea clickeado el numero debera incrementar en 1

*/



const numeroHTML = document.getElementById('numero')
const botonHTML = document.getElementById('aumentar')
const botonDisminuirHtml = document.getElementById('disminuir')



const renderizarContador = (nuvoValor) => {
    numeroHTML.innerText = estadoContador
}

const incrementarContador = () =>{
    estadoContador = estadoContador + 1
    renderizarContador()
}

const restarContador = () =>{
    if(estadoContador > 1){
        estadoContador = estadoContador - 1
        renderizarContador()
    }
    else{

    }
    
}


let estadoContador = 1
renderizarContador()

botonHTML.addEventListener('click', incrementarContador)
botonDisminuirHtml.addEventListener('click', restarContador)


const formLoginHTML = document.getElementById('form-login')

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)



const handleLogin = ( evento ) =>{
    /* Prevenimos que re recarge la pagina al enviarse el formulario */
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)