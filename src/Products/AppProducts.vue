<template>
  <div>
    <AppProduct
      v-for="product in $store.state.products"
      :key="product.id"
      :product="product"
    />

    <h3>Carrinho:</h3>
    <h4>Quantidade: {{ $store.state.cart.length  }} - Total: R$ {{ $store.getters.total  }}</h4>

    {{ $store.state.cart }}
    <br><br><br>

    {{ $store.state.user.name }} {{ $store.state.user.age }} <br><br>

  </div>
</template>

<script>
import AppProduct from './AppProduct.vue';

export default {
    components: { AppProduct }
}
</script>

<style>

</style>