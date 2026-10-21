document.addEventListener("DOMContentLoaded", function() {
    let quantity = localStorage.getItem("IceCreamQty");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    document.getElementById("quantity").textContent = "Quantity: " + quantity;
});