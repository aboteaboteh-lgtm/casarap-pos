// Product Data (Local)
const SYSTEM_LOGO = "https://sparkling-moccasin-hqs11mj5ty.edgeone.app/641245939_1984459358799038_7016626952129303666_n%20(1).jpg";

const DEFAULT_PRODUCTS = [
    { id: 101, name: "Chili Garlic Crab", price: 580.00, category: "Ala Carte", stock: 20, image: "https://placehold.co/400x300?text=Chili+Garlic+Crab" },
    { id: 102, name: "Lobster Thermidor", price: 600.00, category: "Ala Carte", stock: 15, image: "https://placehold.co/400x300?text=Lobster+Thermidor" },
    { id: 103, name: "Garlic Buttered Shrimp Skillet", price: 420.00, category: "Ala Carte", stock: 25, image: "https://placehold.co/400x300?text=Garlic+Buttered+Shrimp" },
    { id: 104, name: "Seafood Paella (with Crabs and Mussels)", price: 650.00, category: "Ala Carte", stock: 12, image: "https://placehold.co/400x300?text=Seafood+Paella" },
    { id: 105, name: "Grilled Salmon with Lemon Dill Sauce", price: 480.00, category: "Ala Carte", stock: 20, image: "https://placehold.co/400x300?text=Grilled+Salmon" },
    { id: 106, name: "Adobo Squid Rings", price: 360.00, category: "Ala Carte", stock: 30, image: "https://placehold.co/400x300?text=Adobo+Squid+Rings" },
    { id: 201, name: "Tropical Crunch Seafood Salad", price: 280.00, category: "Salads", stock: 25, image: "https://placehold.co/400x300?text=Tropical+Seafood+Salad" },
    { id: 202, name: "Crab and Adobo Salad", price: 260.00, category: "Salads", stock: 20, image: "https://placehold.co/400x300?text=Crab+and+Adobo+Salad" },
    { id: 203, name: "Seaweed & Cucumber Salad", price: 260.00, category: "Salads", stock: 30, image: "https://placehold.co/400x300?text=Seaweed+Cucumber+Salad" },
    { id: 204, name: "Smoked Salmon Caesar Salad", price: 220.00, category: "Salads", stock: 20, image: "https://placehold.co/400x300?text=Smoked+Salmon+Caesar" },
    { id: 301, name: "Steak and Prawns", price: 550.00, category: "Chef's Ocean Special", stock: 15, image: "https://placehold.co/400x300?text=Steak+and+Prawns" },
    { id: 302, name: "Baked Lobster with Garlic butter", price: 980.00, category: "Chef's Ocean Special", stock: 10, image: "https://placehold.co/400x300?text=Baked+Lobster" },
    { id: 303, name: "Crab Mac and Cheese Gratin", price: 420.00, category: "Chef's Ocean Special", stock: 18, image: "https://placehold.co/400x300?text=Crab+Mac+Cheese" },
    { id: 304, name: "Seafood Kare-Kare with Peanut Sauce", price: 620.00, category: "Chef's Ocean Special", stock: 15, image: "https://placehold.co/400x300?text=Seafood+Kare-Kare" },
    { id: 401, name: "Mango Float with Crab-shaped Cookie Topper", price: 150.00, category: "Desserts", stock: 40, image: "https://placehold.co/400x300?text=Mango+Float" },
    { id: 402, name: "Ube Macapuno Cheesecake", price: 210.00, category: "Desserts", stock: 35, image: "https://placehold.co/400x300?text=Ube+Cheesecake" },
    { id: 403, name: "Calamansi Key Lime Pie", price: 190.00, category: "Desserts", stock: 25, image: "https://placehold.co/400x300?text=Calamansi+Pie" },
    { id: 404, name: "Table Chocolate Lava Cake", price: 180.00, category: "Desserts", stock: 30, image: "https://placehold.co/400x300?text=Choco+Lava+Cake" },
    { id: 501, name: "Calamansi Mint Cooler", price: 90.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Calamansi+Cooler" },
    { id: 502, name: "Fresh Watermelon Shake", price: 110.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Watermelon+Shake" },
    { id: 503, name: "Iced Barako Coffee", price: 120.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Iced+Barako+Coffee" },
    { id: 504, name: "Tropical Fruit Punch", price: 130.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Tropical+Punch" },
    { id: 505, name: "Craft Beer (local)", price: 180.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Craft+Beer" },
    { id: 506, name: "House Wine", price: 220.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=House+Wine" },
    { id: 507, name: "House Blend Brewed Coffee", price: 150.00, category: "Drinks", stock: 50, image: "https://placehold.co/400x300?text=Brewed+Coffee" }
];

let products = JSON.parse(localStorage.getItem('pos_products')) || DEFAULT_PRODUCTS;
let users = JSON.parse(localStorage.getItem('pos_users')) || [{ username: "admin", password: "password123", role: "admin" }];
let transactions = JSON.parse(localStorage.getItem('pos_transactions')) || [];

function saveData() {
    localStorage.setItem('pos_products', JSON.stringify(products));
    localStorage.setItem('pos_users', JSON.stringify(users));
    localStorage.setItem('pos_transactions', JSON.stringify(transactions));
    localStorage.setItem('pos_cart', JSON.stringify(cart));
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// User Data
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('pos_cart')) || {}; 
let activeCategory = 'All';
let currentTotal = 0; // Temp store for checkout

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');

    if (passwordInput && showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener('change', () => {
            // Toggle password visibility
            passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderProducts();
        });
    }

    // Checkout Modal Live Updates
    const discountInput = document.getElementById('discount-input');
    const tenderedInput = document.getElementById('amount-tendered');
    const paymentMethod = document.getElementById('payment-method');

    if (discountInput) discountInput.addEventListener('input', updateCheckoutCalculations);
    if (tenderedInput) tenderedInput.addEventListener('input', updateCheckoutCalculations);
    if (paymentMethod) paymentMethod.addEventListener('change', () => {
        toggleCashInput();
        updateCheckoutCalculations();
    });
});

function renderCategories() {
    const categories = ['All', ...new Set(products.map(p => p.category))];
    const container = document.getElementById('category-tabs');
    container.innerHTML = categories.map(cat => `
        <button class="btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4" onclick="setCategory('${cat.replace(/'/g, "&apos;")}')">${cat}</button>
    `).join('');
}

function setCategory(cat) {
    activeCategory = cat;
    renderCategories(); // Re-render to update active class
    renderProducts();
}

function handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value.trim();
    
    const user = users.find(user => user.username === u && user.password === p);
    
    if (user) {
        currentUser = user;
        document.getElementById('user-display').textContent = user.username;
        document.getElementById('login-view').classList.add('d-none');
        document.getElementById('pos-view').classList.remove('d-none');
        if(user.role === 'admin') document.getElementById('admin-dashboard-btn').classList.remove('d-none');
        renderProducts();
        renderCategories();
        renderCart();
    } else {
        const err = document.getElementById('login-error');
        err.textContent = "Invalid credentials";
        err.classList.remove('d-none');
    }
}

function handleLogout() {
    cart = {};
    saveData();
    currentUser = null;
    document.getElementById('pos-view').classList.add('d-none');
    document.getElementById('admin-view').classList.add('d-none');
    document.getElementById('login-view').classList.remove('d-none');
    document.getElementById('admin-dashboard-btn').classList.add('d-none');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').classList.add('d-none');
}

function renderProducts() {
    const container = document.getElementById('product-list');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    let list = products;
    
    // Filter by Category
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory);
    // Filter by Search
    if (searchTerm) list = list.filter(p => p.name.toLowerCase().includes(searchTerm));

    if (list.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5 text-muted">No products found.</div>';
        return;
    }

    container.innerHTML = list.map(p => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card product-card h-100" onclick="incrementItem(${p.id})">
                <img src="${p.image}" class="card-img-top product-img" alt="${p.name}">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <h6 class="card-title">${p.name}</h6>
                    <small class="text-muted d-block mb-2">Stock: ${p.stock}</small>
                    <span class="badge bg-warning text-dark fs-6">₱${p.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function incrementItem(id) {
    const product = products.find(p => p.id === id);
    const currentQty = cart[id] || 0;
    
    if (currentQty < product.stock) {
        cart[id] = currentQty + 1;
        saveData();
        renderCart();
    } else {
        alert("Not enough stock!");
    }
}

function decrementItem(id) {
    if (cart[id]) {
        cart[id]--;
        if (cart[id] <= 0) {
            delete cart[id];
        }
        saveData();
        renderCart();
    }
}

function removeItem(id) {
    if (cart[id]) {
        delete cart[id];
        saveData();
        renderCart();
    }
}

function renderCart() {
    const cartBody = document.getElementById('cart-body');
    let total = 0;
    const productLookup = new Map(products.map(p => [String(p.id), p]));

    cartBody.innerHTML = Object.keys(cart).map(id => {
        const product = productLookup.get(String(id));
        if (!product) return '';
        const qty = cart[id];
        const cost = product.price * qty;
        total += cost;
        return `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="fw-bold">${product.name}</div>
                    <small class="text-muted">₱${product.price.toFixed(2)} ea.</small>
                </div>
                <div class="cart-item-controls">
                    <button class="btn btn-sm btn-outline-secondary" onclick="decrementItem(${id})">-</button>
                    <span class="cart-item-qty fw-bold">${qty}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="incrementItem(${id})">+</button>
                </div>
                <div class="fw-bold mx-2">₱${cost.toFixed(2)}</div>
                <button class="btn btn-sm btn-remove-item" onclick="removeItem(${id})"><i class="bi bi-x-circle-fill"></i></button>
            </div>
        `;
    }).join('');
    document.getElementById('total-display').innerText = `₱${total.toFixed(2)}`;
}

// --- Checkout & Payment Logic ---

function processCheckout() {
    if(Object.keys(cart).length === 0) return alert("Cart is empty!");
    
    const productLookup = new Map(products.map(p => [String(p.id), p]));

    // Calculate initial total
    currentTotal = Object.keys(cart).reduce((sum, id) => {
        const p = productLookup.get(String(id));
        return sum + (p ? p.price * cart[id] : 0);
    }, 0);

    // Populate Order Summary in Modal
    const summaryContainer = document.getElementById('checkout-cart-items');
    summaryContainer.innerHTML = Object.keys(cart).map(id => {
        const p = productLookup.get(String(id));
        return `<div class="d-flex justify-content-between">
            <span>${p.name} <span class="fw-bold">x${cart[id]}</span></span>
            <span>₱${(p.price * cart[id]).toFixed(2)}</span>
        </div>`;
    }).join('');

    // Reset Modal Inputs
    document.getElementById('checkout-subtotal').innerText = `₱${currentTotal.toFixed(2)}`;
    document.getElementById('discount-input').value = 0;
    document.getElementById('table-number').value = '';
    document.getElementById('amount-tendered').value = 0;
    document.getElementById('payment-method').value = 'Cash';
    toggleCashInput();
    
    // Show Modal
    const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    modal.show();
}

function toggleCashInput() {
    const method = document.getElementById('payment-method').value;
    const cashSection = document.getElementById('cash-payment-section');
    const ewalletSection = document.getElementById('ewallet-payment-section');
    if (method === 'Cash') {
        cashSection.style.display = 'block';
        ewalletSection.style.display = 'none';
    } else {
        cashSection.style.display = 'none';
        // Show QR code only for E-Wallet
        ewalletSection.style.display = method === 'E-Wallet' ? 'block' : 'none';
    }
    updateCheckoutCalculations();
}

function applySeniorDiscount() {
    document.getElementById('discount-input').value = 20;
    updateCheckoutCalculations();
}

function updateCheckoutCalculations() {
    const discountPercent = parseFloat(document.getElementById('discount-input').value) || 0;
    const tendered = parseFloat(document.getElementById('amount-tendered').value) || 0;
    
    const discountAmount = currentTotal * (discountPercent / 100);
    const finalTotal = Math.max(0, currentTotal - discountAmount);
    const change = Math.max(0, tendered - finalTotal);

    document.getElementById('final-total').innerText = `₱${finalTotal.toFixed(2)}`;
    document.getElementById('change-display').innerText = `₱${change.toFixed(2)}`;
    
    return { finalTotal, change, discountAmount };
}

function finalizeTransaction() {
    const calc = updateCheckoutCalculations();
    const method = document.getElementById('payment-method').value;
    const tendered = parseFloat(document.getElementById('amount-tendered').value) || 0;
    const tableNum = document.getElementById('table-number').value || 'N/A';

    // Validation
    if (method === 'Cash' && tendered < calc.finalTotal) {
        return alert("Insufficient cash tendered!");
    }

    const productLookup = new Map(products.map(p => [String(p.id), p]));

    // Deduct Stock
    Object.keys(cart).forEach(id => {
        const product = productLookup.get(String(id));
        if(product) product.stock -= cart[id];
    });
    saveData();

    // Record Transaction
    const txId = Date.now().toString().slice(-6);
    transactions.push({
        id: txId,
        cashier: currentUser.username,
        total: calc.finalTotal,
        items: {...cart},
        table: tableNum,
        timestamp: new Date()
    });

    // Generate Receipt
    let receiptHtml = `
        <div class="receipt-header">
            <img src="${SYSTEM_LOGO}" alt="CA-SARAP Logo" class="receipt-logo"><br>
            <h5 class="fw-bold">CA-SARAP Cafe and Restaurant</h5>
            <small>Transaction #${txId}</small><br>
            <small>Table: ${tableNum}</small><br>
            <small>${new Date().toLocaleString()}</small><br>
            <small>Cashier: ${currentUser.username}</small>
        </div>
        <div class="mb-2">`;
    
    Object.keys(cart).forEach(id => {
        const p = productLookup.get(String(id));
        const sub = p.price * cart[id];
        receiptHtml += `<div class="d-flex justify-content-between">
            <span>${p.name} x${cart[id]}</span>
            <span>₱${sub.toFixed(2)}</span>
        </div>`;
    });

    receiptHtml += `</div>
        <div class="receipt-footer">
            <div class="d-flex justify-content-between"><span>Subtotal:</span><span>₱${currentTotal.toFixed(2)}</span></div>
            <div class="d-flex justify-content-between text-danger"><span>Discount:</span><span>-₱${calc.discountAmount.toFixed(2)}</span></div>
            <div class="d-flex justify-content-between fw-bold"><span>Total:</span><span>₱${calc.finalTotal.toFixed(2)}</span></div>
            <br>
            <div class="d-flex justify-content-between"><span>Paid (${method}):</span><span>₱${(method==='Cash'?tendered:calc.finalTotal).toFixed(2)}</span></div>
            <div class="d-flex justify-content-between"><span>Change:</span><span>₱${calc.change.toFixed(2)}</span></div>
            <div class="mt-3"><small>*** Thank You! ***</small></div>
        </div>`;

    // Close Checkout Modal & Open Receipt
    bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
    document.getElementById('receipt-content').innerHTML = receiptHtml;
    new bootstrap.Modal(document.getElementById('receiptModal')).show();

    // Reset System
    cart = {};
    saveData();
    renderCart();
    renderProducts(); // Update stock display
}

// Admin Functions
function toggleAdminView() {
    const posView = document.getElementById('pos-view');
    const adminView = document.getElementById('admin-view');
    
    if (posView.classList.contains('d-none')) {
        posView.classList.remove('d-none');
        adminView.classList.add('d-none');
    } else {
        posView.classList.add('d-none');
        adminView.classList.remove('d-none');
        renderAdminStats();
    }
}

function updateStock(id) {
    const input = document.getElementById(`stock-${id}`);
    const newStock = parseInt(input.value);
    const product = products.find(p => p.id === id);
    
    if (product && !isNaN(newStock)) {
        product.stock = newStock;
        alert("Stock updated successfully!");
        saveData();
        renderProducts(); // Refresh main POS view
    }
}

function renderAdminStats() {
    // Inventory
    document.getElementById('inventory-body').innerHTML = products.map(p => 
        `<tr>
            <td>${p.name}</td>
            <td style="width: 150px;">
                <div class="input-group input-group-sm">
                    <input type="number" id="stock-${p.id}" class="form-control" value="${p.stock}">
                    <button class="btn btn-success" onclick="updateStock(${p.id})"><i class="bi bi-check"></i></button>
                </div>
            </td>
            <td>₱${p.price.toFixed(2)}</td>
        </tr>`
    ).join('');

    // Sales Report
    const salesByCashier = {};
    transactions.forEach(t => {
        if (!salesByCashier[t.cashier]) salesByCashier[t.cashier] = { count: 0, total: 0 };
        salesByCashier[t.cashier].count++;
        salesByCashier[t.cashier].total += t.total;
    });

    document.getElementById('sales-report-body').innerHTML = Object.keys(salesByCashier).map(c => 
        `<tr><td>${c}</td><td>${salesByCashier[c].count}</td><td>₱${salesByCashier[c].total.toFixed(2)}</td></tr>`
    ).join('');
}

function handleAddUser(e) {
    e.preventDefault();
    const u = document.getElementById('new-username').value;
    const p = document.getElementById('new-password').value;
    const r = document.getElementById('new-role').value;
    
    if(users.find(user => user.username === u)) return alert("User already exists");
    
    users.push({ username: u, password: p, role: r });
    saveData();
    alert("User added!");
    e.target.reset();
}