document.getElementById("addIceCream")
    .addEventListener("click", function() {
    const iceCreamQty = parseInt(document.getElementById('IceCreamQty').value);
    const iceCreamPrice = 67;
    const products = [
        { id: 1, name: "Midnight Ice Cream", price: iceCreamPrice },
    ];
    const total = iceCreamQty * iceCreamPrice;
    alert(`Total for ${iceCreamQty} Ice Cream(s): ₱${total.toFixed(2)}`);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    localStorage.setItem("IceCreamQty", iceCreamQty);

    console.log(products[0].name); //Midnight Ice Cream
});
document.addEventListener("DOMContentLoaded", function() {
    let quantity = localStorage.getItem("IceCreamQty");
    document.getElementById("quantity").textContent = "Quantity: " + quantity;
});