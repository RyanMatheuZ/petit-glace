import { allProducts } from './products.js'

const filterOptions = document.getElementById('filter-options')

filterOptions.addEventListener('change', () => {
    allProducts.forEach(
        el => el.id.style = 'block'
    )

    if (filterOptions.value === 'between-two-four') {
        allProducts.filter(
            el => el.price <= 1.99 || el.price >= 4.99
        ).forEach(
            el => el.id.style.display = 'none'
        )
    } else if (filterOptions.value === 'between-five-seven') {
        allProducts.filter(
            el => el.price <= 5 || el.price >= 7.99
        ).forEach(
            el => el.id.style.display = 'none'
        )
    } else if (filterOptions.value === 'more-eight') {
        allProducts.filter(
            el => el.price <= 7.99
        ).forEach(
            el => el.id.style.display = 'none'
        )
    } else if (filterOptions.value === 'animal') {
        allProducts.filter(
            el => el.origin !== 'animal'
        ).forEach(
            el => el.id.style.display = 'none'
        )
    } else if (filterOptions.value === 'vegan') {
        allProducts.filter(
            el => el.origin !== 'vegan'
        ).forEach(
            el => el.id.style.display = 'none'
        )
    }
})