<template>
  <div class="container-vue">
    <div class="card">
      <div class="card-image">
        <img src="../assets/logo.png" alt="Vue Logo"/>
      </div>
      <div class="product-name">Product #1</div>
      <div class="rating">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
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
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 5%;
    border-color: green!important;
    border-style: solid;
  }
  .product-name {
    margin-top: 30px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
    color: #2c3e50;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .card {
    width: 300px;
    border: 3px solid #ccc;
    border-radius: 4px;
    padding: 15px;
    margin: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

} 

  .card-image img {
    width: 100%;
    height: auto;
    border-bottom: 3px solid #ccc;
  }


.rating {
  color: #ffcc00;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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