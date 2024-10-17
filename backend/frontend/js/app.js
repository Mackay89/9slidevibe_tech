// Function to toggle menu visibility on mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Function to show specific sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to add product to cart
let cart = [];
function addToCart(productName, price) {
    cart.push({ productName, price });
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${productName} added to cart`);
}

// Function to sort products (placeholder)
function sortProducts() {
    const sortBy = document.getElementById('sort-products').value;
    // Implement sorting logic based on `sortBy` value (e.g., by price)
}

