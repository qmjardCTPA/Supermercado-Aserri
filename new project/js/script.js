// Función para cargar y mostrar los productos en la página principal
function loadProducts() {
    const productList = document.getElementById('product-list');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Limpiar el contenedor de productos
    productList.innerHTML = '';

    // Crear las tarjetas de productos
    products.forEach((product, index) => {
        // Código para generar las tarjetas
    });

    // Agregar eventos a los botones "Agregar al carrito"
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productIndex = this.getAttribute('data-index');
            const selectedProduct = products[productIndex];
            agregarAlCarrito(selectedProduct);
        });
    });
}

// Cargar los productos cuando se cargue la página principal
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('index.html')) {
        loadProducts();
    }
});

// Función para verificar si hay un usuario logueado y actualizar la navegación
function updateNav() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const logoutLink = document.getElementById('logout-link');
    const historialLink = document.getElementById('historial-link');
    const welcomeMessage = document.getElementById('welcome-message');

    if (loggedInUser) {
        // Si hay un usuario logueado
        loginLink.style.display = 'none';  // Ocultar el botón de login
        registerLink.style.display = 'none';  // Ocultar el botón de registro
        historialLink.style.display = 'inline';  // Mostrar historial
        welcomeMessage.style.display = 'inline';  // Mostrar mensaje de bienvenida
        welcomeMessage.textContent = `Bienvenido, ${loggedInUser}`;  // Mostrar nombre del usuario
        logoutLink.style.display = 'inline';  // Mostrar botón de cerrar sesión
    } else {
        // Si no hay usuario logueado
        loginLink.style.display = 'inline';  // Mostrar el botón de login
        registerLink.style.display = 'inline';  // Mostrar el botón de registro
        welcomeMessage.style.display = 'none';  // Ocultar el mensaje de bienvenida
        logoutLink.style.display = 'none';  // Ocultar el botón de cerrar sesión
    }
}

// Función para cerrar sesión
function logoutUser() {
    localStorage.removeItem('loggedInUser');  // Eliminar usuario logueado de localStorage
    alert('Has cerrado sesión exitosamente.');
    updateNav();  // Actualizar la barra de navegación
    window.location.href = 'index.html';  // Redirigir a la página principal
}

// Evento para gestionar el cierre de sesión
document.addEventListener('DOMContentLoaded', function() {
    updateNav();  // Llamar a la función para actualizar la navegación cuando la página cargue

    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', logoutUser);
    }
});

document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');  // Activa o desactiva la clase "active" para mostrar/ocultar el menú
});
