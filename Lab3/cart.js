document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});

function updateCartDisplay() {
    const cartContents = document.getElementById('cartContents');
    const totalPriceFull = document.getElementById('totalPrice');
    cartContents.innerHTML = '';
    let totalPrice = 0;

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    storedCart.forEach(item => {
        const product = document.createElement('div');
        product.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContents.appendChild(product);
        totalPrice += item.price;
    });

    totalPriceFull.textContent = 'Total Price: $' + totalPrice.toFixed(2);
}


function getPriceByName(productName) {
    return products.find(product => product.name === productName).price;
}