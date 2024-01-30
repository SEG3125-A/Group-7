// Event listener for DOMContentLoaded to ensure the script runs after the full HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Setting up event listeners for the dropdown menus to handle changes in sorting and filtering
    document.getElementById('priceSort').addEventListener('change', updateProductDisplay);
    document.getElementById('vegetarianFilter').addEventListener('change', updateProductDisplay);
    document.getElementById('glutenFreeFilter').addEventListener('change', updateProductDisplay);
    document.getElementById('dairyFilter').addEventListener('change', updateProductDisplay);
    document.getElementById('fruitFilter').addEventListener('change', updateProductDisplay);

    // Initial call to update the product display based on default dropdown values on page load
    updateProductDisplay();
});


function navigateToCartPage() {
    window.location.href = "cart.html"
}

function navigateToClientPage() {
    window.location.href = "customer.html"
}

// Function to update the display of products based on sorting and filtering criteria
function updateProductDisplay() {
    // Selecting all product elements and converting NodeList to an Array for sorting
    let products = Array.from(document.querySelectorAll('.product'));
    //console.log(products.find(product => product.name === Milk).price);
    // Retrieve the current value of the price sorting dropdown
    const sortBy = document.getElementById('priceSort').value;

    // Sort products based on the price. Sort order is determined by the sortBy value.
    products.sort((a, b) => {
        let priceA = parseInt(a.getAttribute('data-price'));
        let priceB = parseInt(b.getAttribute('data-price'));
        return sortBy === 'lowToHigh' ? priceA - priceB : priceB - priceA;
    });

    // Clear the current product display in preparation for re-rendering
    const container = document.querySelector('.product-container');
    container.innerHTML = '';

    // Re-add products to the container in their new sorted order
    products.forEach(product => container.appendChild(product));

    // Retrieve the current values of the vegetarian and gluten-free filters
    const vegetarianFilter = document.getElementById('vegetarianFilter').value;
    const glutenFreeFilter = document.getElementById('glutenFreeFilter').value;
    const dairyFilter = document.getElementById('dairyFilter').value;
    const fruitFilter = document.getElementById('fruitFilter').value;

    // Loop through each product to determine its visibility based on the filter criteria
    products.forEach(product => {
        const isVegetarian = product.getAttribute('data-vegetarian') === 'true';
        const isGlutenFree = product.getAttribute('data-gluten-free') === 'true';
        const isDairy = product.getAttribute('data-dairy') === 'true';
        const isFruit = product.getAttribute('data-fruit') === 'true';

        // Determine if the product should be shown based on the filter values
        let showProduct = (vegetarianFilter === 'all' || isVegetarian.toString() === vegetarianFilter) && (glutenFreeFilter === 'all' || isGlutenFree.toString() === glutenFreeFilter) && (dairyFilter === 'all' || isDairy.toString() === dairyFilter) && (fruitFilter === 'all' || isFruit.toString() === fruitFilter);

        // Update the product's visibility based on the filtering result
        if (showProduct) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}

const cart = [];

function addToCart(passValue) {
    const product = document.querySelector(`button[value='${passValue}']`).parentNode;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));

    cart.push({ name: productName, price: productPrice });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to the cart.`);
}
