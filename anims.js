//Most of this is the search bar functionality.
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.dataset.name.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
