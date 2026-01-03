const products = [
    { id: 1, name: "Laptop", price: 999, category: "electronics", image: "💻" },
    { id: 2, name: "T-Shirt", price: 29, category: "clothing", image: "👕" },
    { id: 3, name: "JavaScript Book", price: 39, category: "books", image: "📚" },
    { id: 4, name: "Smartphone", price: 699, category: "electronics", image: "📱" },
    { id: 5, name: "Jeans", price: 59, category: "clothing", image: "👖" },
    { id: 6, name: "React Guide", price: 45, category: "books", image: "📖" }
];

let cart = [];
let filteredProducts = products;

const productsGrid = document.getElementById('products');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const cartCount = document.getElementById('cartCount');

function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; color:#666;">No products found.</p>';
        return;
    }
    
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsGrid.appendChild(card);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(`${product.name} added to cart!`);
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    displayProducts(filteredProducts);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

displayProducts(products);

