import { createApp } from 'vue';
import Product from './components/Product.vue';
import Main from './components/Main.vue'

// const app = createApp(Main);
// app.mount('#app');

const el = document.querySelector('#app');
const component = Main;

const mountVue = (el, component) => {
    const app = createApp(component);
    app.mount(el);
}

mountVue(el, component);

export { mountVue }