/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/


const validarPrecio = (input) => {
    return !isNaN(input) && parseFloat(input) > 1;
}

const validarCategoria = (input) => {
    return ['tecnologia', 'hogar', 'otros'].includes(input.toLowerCase())
}

const validarTexto = (input) => {
    return input.length >= 4;
}

const validarDescripcion = (input) =>{
    return input.length >= 10;
}

const validarMarca = (input) => {
    return input.length >= 3;
}


let titulo = prompt ('ingrese un titulo de 4 caracteres')
while(!validarTexto(titulo)){
    titulo = prompt('el dato ingresado no es valido')
}

let precio = prompt('ingrese un numero positivo mayor que 1')
while(!validarPrecio(precio)){
    titulo = prompt('el dato ingresado no es valido')
}

let descripcion = prompt('ingrese una descripcion que contenga mas de 10 caracteres')
while(!validarDescripcion(descripcion)){
    descripcion = prompt('el dato ingresado no es valido')
}

let categoria = prompt('ingrese una categoria que sea tecnologi, hogar u otros')
while(!validarCategoria(categoria)){
    categoria = prompt('el dato ingresado no es valido')
}

let marca = prompt('ingrese el nombre de la marca del producto con almenos 3 caracteres o mas')
while(!validarMarca(marca)){
    marca = prompt('el dato ingresado es incorrecto')
}

