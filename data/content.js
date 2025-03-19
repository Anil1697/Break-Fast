const menuData = {
    breakfast: [
        { name: "Karam Idli", price: "$5", image: "images/Karam_Idli.jpg" },
        { name: "Sambar Idli", price: "$6", image: "images/Sambar_Idli.jpg" },
        { name: "Dosa", price: "$5", image: "images/Dosa.jpg" },
        { name: "Masala Dosa", price: "$6", image: "images/Masala_Dosa.jpg" }
    ],
    biryani: [
        { name: "Chicken Biryani", price: "$10", image: "images/Chicken_Biryani.jpg" },
        { name: "Mutton Biryani", price: "$12", image: "images/Mutton_Biryani.jpg" },
        { name: "Fish Biryani", price: "$13", image: "images/Fish_Biryani.jpg" }
    ],
    drinks: [
        { name: "Badam Milk", price: "$3", image: "images/Badam_Milk.jpg" },
        { name: "Irani Chai", price: "$5", image: "images/Irani_Chai.jpg" }
    ],
    desserts: [
        { name: "Gulab Jamun", price: "$4", image: "images/Gulab_Jamun.jpg" },
        { name: "Rasagulla", price: "$6", image: "images/Rasagulla.jpg" }
    ]
};

// Function to populate menu dynamically
function populateMenu() {
    Object.keys(menuData).forEach(category => {
        const categoryDiv = document.getElementById(category);
        const template = document.getElementById("menu-template");

        menuData[category].forEach(item => {
            const clone = template.content.cloneNode(true);
            clone.querySelector("img").src = item.image;
            clone.querySelector("img").alt = item.name;
            clone.querySelector("p").textContent = `${item.name} - ${item.price}`;
            clone.querySelector("button").addEventListener("click", () => addToCart(item.name, item.price));
            categoryDiv.appendChild(clone);
        });
    });
}

// Function to handle adding items to cart
function addToCart(name, price) {
    const cart = document.getElementById("cart");
    const item = document.createElement("p");
    item.textContent = `${name} - ${price}`;
    cart.appendChild(item);
}

// Initialize menu on page load
document.addEventListener("DOMContentLoaded", populateMenu);
