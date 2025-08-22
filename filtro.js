// Tenemos un arreglo de objetos con los productos
const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Se obtienen las referencias a los elementos del DOM.
const listaDeProductos = document.getElementById("lista-de-productos");
const filtroInput = document.getElementById("filtro-input");

// Se crea la referencia para el boton. Se le agregó un ID al botón en el HTML para una selección más robusta.
const botonFiltro = document.getElementById("btn-filtro");

// Función para mostrar los productos
function displayProductos(productosArray) {
    // Se limpia el contenedor antes de mostrar los productos.
    listaDeProductos.innerHTML = "";
    
    productosArray.forEach(producto => {
        // Se crea el contenedor del producto.
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        
        // Se crea el párrafo para el título.
        const tituloProducto = document.createElement("p");
        tituloProducto.classList.add("titulo");
        tituloProducto.textContent = producto.nombre;
        
        // Se crea el elemento img y se le asigna la fuente.
        const imagenProducto = document.createElement("img");
        imagenProducto.setAttribute("src", producto.img);
        
        // Se añaden los elementos al div.producto.
        divProducto.appendChild(tituloProducto);
        divProducto.appendChild(imagenProducto);
        
        // Se añade el div completo al contenedor de la lista.
        listaDeProductos.appendChild(divProducto);
    });
}

// Se crea la función de filtrado. Se retorna un nuevo arreglo con los elementos que cumplen la condición.
const filtrado = (productosArray = [], texto) => {
    return productosArray.filter(item => 
        item.tipo.toLowerCase().includes(texto.toLowerCase()) || 
        item.color.toLowerCase().includes(texto.toLowerCase())
    );
}

// Se llama a la función para mostrar todos los productos al cargar la página
displayProductos(productos);


// Se añade el event listener al botón de filtrar.
botonFiltro.addEventListener("click", function() {
    // Se obtiene el texto del input
    const texto = filtroInput.value;
    
    // Se llama a la función de filtrado con los productos y el texto
    const productosFiltrados = filtrado(productos, texto);
    
    // Se llama a la función de display con el nuevo arreglo filtrado
    displayProductos(productosFiltrados);
});


