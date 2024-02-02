document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});

function updateCartDisplay() {
    const cartContents = document.getElementById('cartContents');
    const totalPriceFull = document.getElementById('totalPrice');
    cartContents.innerHTML = '';
    let totalPrice = 0;

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    storedCart.forEach((item, index) => {
        const product = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'item' + index;
        checkbox.value = index; 

        product.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        product.prepend(checkbox);
        cartContents.appendChild(product);

        totalPrice += item.price;
    });

    totalPriceFull.textContent = 'Total Price: $' + totalPrice.toFixed(2);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Selected Items';
    removeButton.addEventListener('click', removeSelectedItems);
    cartContents.appendChild(removeButton);
}

function removeSelectedItems() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
    Array.from(checkboxes).forEach(checkbox => {
        storedCart.splice(checkbox.value, 1); 
    });

    localStorage.setItem('cart', JSON.stringify(storedCart));

    updateCartDisplay();
}
