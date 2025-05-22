// Arrays 
let libros = [];
let carrito = [];

//elementos del HTML
const tituloInput = document.getElementById('tituloLibro');
const precioInput = document.getElementById('precioLibro');
const agregarBoton = document.getElementById('agregarLibroBoton');
const listaLibros = document.getElementById('listadeLibros');
const listaCarrito = document.getElementById('listaCarrito');
const totalCarrito = document.getElementById('totalCarrito');
const vaciarCarritoBoton = document.getElementById('vaciarCarritoBoton');
const comprarBoton = document.getElementById('comprarBoton');

// Funcion Mostrar libros disponibles
function mostrarLibros() {
    listaLibros.innerHTML = ''; // Limpiar la lista

    libros.forEach((libro, indice) => {
        const itemLista = document.createElement('li');

        itemLista.innerHTML = `
            ${libro.titulo} - $${libro.precio.toFixed(2)}
            <button onclick="agregarAlCarrito(${indice})">Agregar al carrito</button>
        `;

        listaLibros.appendChild(itemLista);
    });
}

// Funcion de Mostrar contenido del carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = ''; // Limpiar lista
    let total = 0;

    carrito.forEach(libro => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${libro.titulo} - $${libro.precio.toFixed(2)}`;
        listaCarrito.appendChild(itemCarrito);
        total += libro.precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}

// Agregar un libro (cuando se hace clic en el botón)
agregarBoton.addEventListener('click', function () {
    const titulo = tituloInput.value.trim();
    const precio = parseFloat(precioInput.value);

    // Validación clara
    const tituloValido = titulo !== '';
    const precioEsNumero = !isNaN(precio);
    const precioValido = precio > 0;

    if (tituloValido && precioEsNumero && precioValido) {
        libros.push({ titulo, precio });
        mostrarLibros();
        tituloInput.value = '';
        precioInput.value = '';
    } else {
        alert('Debe ingresar un titulo valido y un precio mayor a 0');
    }
});

// Funcion para agregar libro al carrito
function agregarAlCarrito(indice) {
    const libroSeleccionado = libros[indice];
    carrito.push(libroSeleccionado);
    mostrarCarrito();
}

// Funcon para vaciar carrito
vaciarCarritoBoton.addEventListener('click', () => {
    carrito = [];
    mostrarCarrito();
});

// Funcion de Comprar
comprarBoton.addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacio');
        return;
    }

    alert('Compra realizada con exito');
    carrito = [];
    mostrarCarrito();
});
