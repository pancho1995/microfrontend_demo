import Product from 'product/ShopProduct';
import { mountVue } from 'product/ProductApp';

var shops = ['Shop #1', 'Shop #2', 'Shop #3', 'Shop #4'];

shops.forEach(shopName => {
    renderShops({shopName});
});

function renderShops ({shopName}) {

    for(let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.id = `product-vue-component${i}`;
        
        const parent_el = document.getElementById(shopName);
        if(parent_el) {
            parent_el.appendChild(div);
            mountVue(div, Product);
        }
    }
}




