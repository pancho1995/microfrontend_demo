import Product from 'product/ProductComponent';
import { mountVue } from 'product/ProductApp';

for(let i = 0; i < 1; i++) {
    const div = document.createElement('div');
    div.id = `trending-vue-component-${i}`;

    const parent_el = document.getElementById('trending');
    if(parent_el) {
        parent_el.appendChild(div);
        mountVue(div, Product);
    }
}
