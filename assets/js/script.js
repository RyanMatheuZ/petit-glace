import { allProducts } from './products.js';

const filterOptions = document.getElementById('filter-options');

function filterByPrice(minPrice, maxPrice) {
    allProducts.filter(
        el => el.price <= minPrice || el.price >= maxPrice)
    .forEach(
        el => el.id.style.display = 'none'
    );
}

function filterByOrigin(originOfIceCream) {
    allProducts.filter(
        el => el.origin !== originOfIceCream)
    .forEach(
        el => el.id.style.display = 'none'
    );
}

filterOptions.addEventListener('change', () => {
    allProducts.forEach(el => el.id.style = 'block');

    if (filterOptions.value === 'between-two-four') filterByPrice(1.99, 4.99);
    else if (filterOptions.value === 'between-five-seven') filterByPrice(5, 7.99);
    else if (filterOptions.value === 'more-eight') filterByPrice(7.99, undefined);
    else if (filterOptions.value === 'animal') filterByOrigin('animal');
    else if (filterOptions.value === 'vegan') filterByOrigin('vegan');
});