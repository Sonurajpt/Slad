// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

// Sample Products Data
const products = [
    { id: 1, name: "Fresh Broccoli", price: 2.99, category: "vegetables", img: "https://images.unsplash.com/photo-1628773827016-2af3c6a3d6f0" },
    { id: 2, name: "Red Onion", price: 1.49, category: "vegetables", img: "https://images.unsplash.com/photo-1589810660500-2f1f79b10e0d" },
    { id: 3, name: "Green Capsicum", price: 1.89, category: "vegetables", img: "https://images.unsplash.com/photo-1601039637293-79b7f4ab2152" },
    { id: 4, name: "Classic Beef Burger", price: 8.99, category: "burger", img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828" },
    { id: 5, name: "Fresh Kiwi Pack", price: 3.99, category: "fruits", img: "https://images.unsplash.com/photo-1610725664335-9c2e95d9e2b7" },
    { id: 6, name: "Caesar Salad Bowl", price: 7.99, category: "salad", img: "https://images.unsplash.com/photo-1551248429-40975aa4de74" },
    { id: 7, name: "Grilled Chicken Salad", price: 9.99, category: "salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
    { id: 8, name: "Cheese Burger", price: 9.49, category: "burger", img: "https://images.unsplash.com/photo-1571091718767-18cab4812e7d" }
];

// Render Products
function renderProducts(filter = "all") {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = "";

    let filteredProducts = filter === "all" 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Add to Cart
let cartCount = 0;
function addToCart(id) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    
    // Simple notification
    const notification = document.createElement('div');
    notification.textContent = "Item added to cart!";
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px; background: #27ae60; 
        color: white; padding: 15px 25px; border-radius: 50px; 
        z-index: 9999; font-weight: 600; animation: slideIn 0.5s;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// Category Filter
document.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.cat-item').forEach(i => i.style.opacity = "0.6");
        item.style.opacity = "1";
        const category = item.getAttribute('data-category');
        renderProducts(category);
    });
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.querySelector('[data-category="all"]').style.opacity = "1";
});
