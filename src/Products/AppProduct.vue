<template>
  <div class="card">
    {{ product.name }} - {{ product.price }}
    
    <br><br>
    
    <button @click="addProduct()">
      Adicionar
    </button>
    
    <br><br>

    <button @click="removeProduct()">
      Remover
    </button>

  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addProduct() {
      this.$store.commit('addProduct', this.product)
    },
    removeProduct() {
      this.$store.commit('removeProduct', this.product.id)
    }
  }
}  
</script>

<style scoped>
  .card {
    margin: auto;
    background-color: burlywood;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 20px;
    text-align: left;
    width: 200px;
  }
</style>