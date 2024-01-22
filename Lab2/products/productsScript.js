// Event listener for DOMContentLoaded to ensure the script runs after the full HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Setting up event listeners for the dropdown menus to handle changes in sorting and filtering
    document.getElementById('priceSort').addEventListener('change', updateProductDisplay);
    document.getElementById('vegetarianFilter').addEventListener('change', updateProductDisplay);
    document.getElementById('glutenFreeFilter').addEventListener('change', updateProductDisplay);

    // Initial call to update the product display based on default dropdown values on page load
    updateProductDisplay();
});

// Function to update the display of products based on sorting and filtering criteria
function updateProductDisplay() {
    // Selecting all product elements and converting NodeList to an Array for sorting
    let products = Array.from(document.querySelectorAll('.product'));

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

    // Loop through each product to determine its visibility based on the filter criteria
    products.forEach(product => {
        const isVegetarian = product.getAttribute('data-vegetarian') === 'true';
        const isGlutenFree = product.getAttribute('data-gluten-free') === 'true';

        // Determine if the product should be shown based on the filter values
        let showProduct = (vegetarianFilter === 'all' || isVegetarian.toString() === vegetarianFilter) &&
            (glutenFreeFilter === 'all' || isGlutenFree.toString() === glutenFreeFilter);

        // Update the product's visibility based on the filtering result
        if (showProduct) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}
