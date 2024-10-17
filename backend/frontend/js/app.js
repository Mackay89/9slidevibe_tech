// Toggle Visibility of Sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('main .section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Hide all sections
    });
    document.getElementById(sectionId).classList.remove('hidden'); // Show selected section
}

// Toggle Navigation Menu for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
}

// Handle Adding to Cart
let cart = {};
function addToCart(productName, price) {
    if (!cart[productName]) {
        cart[productName] = { price: price, quantity: 1 };
    } else {
        cart[productName].quantity += 1;
    }
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

// Update Cart Count
function updateCartCount() {
    const cartCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Handle Contact Form Submission
function sendContact(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('contact-form'));
    // Here you can send the form data to the server
    alert(`Message sent: ${formData.get('contact-message')}`);
}

// Handle Order Tracking Form Submission
function trackOrder(event) {
    event.preventDefault();
    const trackingNumber = document.getElementById('tracking-number').value;
    // Here you can implement tracking logic
    alert(`Tracking order number: ${trackingNumber}`);
}

// Handle Login Form Submission
function submitLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Implement login logic here
    alert(`Logging in with ${email}`);
}

// Toggle Signup Form
function toggleSignup() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

