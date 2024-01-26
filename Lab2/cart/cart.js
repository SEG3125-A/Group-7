document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});

function updateCartDisplay() {
    const cartContents = document.getElementById('cartContents');
    const totalPriceFull = document.getElementById('totalPrice');
    cartContents.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const product = document.createElement('div');
        product.textContent = item;
        cartContents.appendChild(product);

        totalPrice += getPriceByName(item);
    });

    totalPriceFull.textContent = 'Total Price: $' + totalPrice.toFixed(2);
}

function getPriceByName(productName) {
    return products.find(product => product.name === productName).price;
}
