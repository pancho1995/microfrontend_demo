<template>
    <div class="container-vue">
        <div class="card">
            <div class="card-image">
                <img src="../assets/logo.png" class="image-small" alt="Vue Logo"/>
            </div>
            <div class="card-content">
            <div class="product-name">Product Shop</div>
            <div class="rating">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
            </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
  
      return {
  
      };
    },
  };
  </script>
  
  <style scoped>
    .container-vue {
        display: flex;
        justify-content: space-between;
    }
    .card {
        display: flex;
        border: 2px solid #ccc;
        border-radius: 4px;
        padding: 15px;
        margin-right: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .product-name {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 25px;
      color: #2c3e50;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .card-image {
        margin-right: 1rem;
        border-right: 1px solid #ccc;
        padding-right: 1rem;
    }
    .image-small {
        width: 100px;
        height: 100px;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
  
    
    .rating {
        color: #ffcc00;
        font-size: 30px;
        display: flex;
        display: flex;
    }
  
    .star {
        display: inline-block;
        margin-right: 2px;
    }
  
    .container-vue {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  </style>