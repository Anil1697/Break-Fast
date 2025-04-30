let cart = [];

function addToCart(item, price) {
    const existingItem = cart.find(entry => entry.item === item);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(itemName) {
    cart = cart.filter(entry => entry.item !== itemName);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    if (cartItems) cartItems.innerHTML = "";

    let total = 0;
    let count = 0;
    cart.forEach(({ item, price, quantity }) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="item-name">${item} x${quantity}</span>
            <span class="item-price">$${(price * quantity).toFixed(2)}</span>
            <button class="delete-btn" onclick="removeFromCart('${item}')">🗑️</button>
        `;
        if (cartItems) cartItems.appendChild(li);
        total += price * quantity;
        count += quantity;
    });

    if (cartTotal) cartTotal.textContent = total.toFixed(2);
    if (cartCount) cartCount.textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartDisplay();
    const themeToggle = document.getElementById("toggle-theme");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});