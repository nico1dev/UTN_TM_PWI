/* 
fetch es una funcion que me permite hacer peticiones HTTP¨, recibe 2 parametros
1) URL (un string que sera la url a la que vamos a consultar o peticionar) 
2) un objeto de configuracion de la peticion
*/



/* 
const solicitarUsuario = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
    
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log (resultado)
}

solicitarUsuario() */


/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/
const contenedorDePosteos = document.getElementById('contenedorDePosteos')

const solicitarPost = async () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
    
    const resultado = await respuesta.json()
    console.log(resultado)

    let plantillaHtml = ''
    for(const post of resultado){
        plantillaHtml = plantillaHtml + `
        <div>
        <h3>${post.title}</h3>
        <p>${past.body}</p>
        <button>:♥</button>
        `
    }
    contenedorDePosteos.innerHtml = plantillaHtml
}
solicitarPost()

