const productos = [
    {
        nombre: 'yerba mate canarias',
        id: 1,
        precio: 4000,
        cantidad: 1,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_685893-MLA40114694305_122019-O.webp',
    },
    {
        nombre: 'yerba mate canarias',
        id: 2,
        precio: 4200,
        cantidad: 5,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_685893-MLA40114694305_122019-O.webp',
    },
    {
        nombre: 'yerba mate canarias',
        id: 3,
        precio: 4300,
        cantidad: 3,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_685893-MLA40114694305_122019-O.webp',
    },
]



const renderizarCarrito = () => {
    const productoHtml = document.getElementById('productos')
    const totalHTML = document.getElementById('total')
    let total = 0 
let plantillaCarrito = ''
for(const item of productos){
    total = total + (item.precio * item.cantidad)
    plantillaCarrito = plantillaCarrito + `
    <div>
        <h3>${item.nombre} id#${item.id}</h3>
        <img width='100px' src="${item.thumbnail}"/>
        <span>Precio unitario: ${item.precio}x${item.cantidad} unidades</span>
        <span>Total: ${item.precio * item.cantidad}</span>
    <div>
    <hr>
    `
}

productoHtml.innerHTML = plantillaCarrito
totalHTML.innerHTML = 'TOTAL: $' + total
}





renderizarCarrito(productos)

const buscarPorID = (id) =>{
    for(const item of productos){
        if(item.id === id){
            return item
        }
    }
}

const buscarPosicionPorId = (id) =>{
    for(let i = 0; i < productos.length; i = i +1){
        const item = productos[i]
        if(item.id === id){
            return item
        }
    }
}

const eliminarItemPorId = (id) =>{
/*     const itemBuscado = productos.find((item) => {
        return item.id === id
    }) */
    /* const itemBuscado = productos.find((item) => item.id === id) */
    /* const itemBuscado = buscarPorID(id) */
    const itemBuscado = productos.find((item) => item.id === id)
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            //logica para eliminar item
            const posicionItem = productos.find((item) => item.id === id)
            productos.splice(posicionItem, 1)
        }
        else{
            //logica para decrementar en 1 la cantidad
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(productos)
    }
    else{
        console.error('Error: item con id inexistente')
    }
    
    console.log(itemBuscado)
}

eliminarItemPorId(1)



const agregarItemAlCarrito = (id) => {
    const itemBuscado = productos.find((carrito) => carrito.id === id)
    if(itemBuscado){
        itemBuscado.cantidad += 1
    }else{
        const nuevoItem = productos.find((item) => item.id === id)
        if(nuevoItem){
            nuevoItem.cantidad = 1
            productos.push(nuevoItem)
        }else{
            console.error('Error: el id no existe')
        }
    }
    renderizarCarrito(productos)
}