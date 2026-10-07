document.getElementById('calculate-total').addEventListener('click', function() {

const price = document.getElementById('price').value;
const quantity = document.getElementById('quantity').value;
const membership = document.getElementById('membership').value;
let SubTotal = price * quantity;
let discount = 0;
let discountTotal = 0;
if (SubTotal >= 1000 && membership === 'premium') {
    discount = 0.15;
} else if (SubTotal >= 1000 && membership === 'regular') {
    discount = 0.10;
} else if (SubTotal < 1000 && membership === 'premium') {
    discount = 0.05;
}
discountTotal = SubTotal * discount;
SubTotal = SubTotal - discountTotal;
document.getElementById('total').textContent = SubTotal.toFixed(2);
document.getElementById('discount-total').textContent = discountTotal.toFixed(2);

});
    



