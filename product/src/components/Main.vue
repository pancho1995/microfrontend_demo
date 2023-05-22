<template>
    <div class="container-vue">
        <div class="standalone"> Standalone Deployment </div>
        <div class="standalone"> Product app </div>
        <div class="components">
            <product></product>
            <shop-product></shop-product>
        </div>
        
    </div>
  </template>
  
  <script>
  import Product from './Product.vue';
  import ShopProduct from './ShopProduct.vue';
  export default {
  components: { Product, ShopProduct },
    data() {
  
      return {
  
      };
    },
  };
  </script>
  
  <style scoped>
    .standalone {
        align-items: center;
        justify-content: center;
        display: flex;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
        font-size: 30px;
        margin: 5% 0%;
        }

    .components {
        align-items: center;
        justify-content: center;
        display: flex;
    }    
  </style>