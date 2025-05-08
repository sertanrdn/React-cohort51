export async function fetchCategories() {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories');

        if(!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        return await res.json();

    } catch (error) {
        console.error('Error fetching categories: ', error);
        throw error;
    }
}

export async function fetchProducts(productId = '') {
    try {
        const url = productId 
            ? `https://fakestoreapi.com/products/category/${productId}` 
            : 'https://fakestoreapi.com/products';

        const res = await fetch(url);

        if(!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        return await res.json();
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}