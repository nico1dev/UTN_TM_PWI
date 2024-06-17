const comprarHtml = document.getElementById('comprar')
const elegirHtml = document.getElementById('elegir-cantidad')
const restarHtml = document.getElementById('restar')
const numeroHtml = document.getElementById('numero')
const agregarHtml = document.getElementById('agregar')

elegirHtml.style.display = 'none'

const onClick = () =>{
    comprarHTML.style.display = 'none'
    elegirHTML.style.display = 'flex'
}

comprarHTML.addEventListener('click', onClick)

const volver = ()=>{
    comprarHTML.style.display = 'flex'
    elegirHTML.style.display = 'none'
    }

const renderizarContador = () =>{
    numeroHTML.innerText = numero
}

const agregar = () =>{
    numero = numero + 1
    renderizarContador()
}

const restar = () =>{
    if (numero > 1){
    numero = numero - 1
    renderizarContador()
    }
    else if (numero === 1){
        volver()
    }
}

let numero = 1
renderizarContador()

agregarHTML.addEventListener ('click', agregar)
restarHTML.addEventListener('click', restar)