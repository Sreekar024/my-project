const categorySelect = document.getElementById('category');
const productList = document.getElementById('product-list');
const products = productList.getElementsByTagName('li');

categorySelect.addEventListener('change', function() {
  const selectedCategory = this.value;

  for (let product of products) {
    const productCategory = product.getAttribute('data-category');

    if (selectedCategory === 'all' || productCategory === selectedCategory) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  }
});
