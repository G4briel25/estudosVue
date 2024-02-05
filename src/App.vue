<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink :to="{ name: 'services' }">Serviços</RouterLink> |
      <RouterLink to="/usuarios/10">Usuário</RouterLink> |
      <router-link to="/about">About</router-link>
    </nav>
    <RouterView/>      
    
    <br>

    <ComponentVuex />

    <br>

    <AppProducts />

  </div>
</template>

<script>
import ComponentVuex from '@/components/ComponentVuex.vue';
import AppProducts from '@/Products/AppProducts.vue';

export default {
  components: { ComponentVuex, AppProducts },
    data() {
        return {};
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
