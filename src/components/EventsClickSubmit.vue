<template>
  <div>
    <h1>Eventos</h1>
    <form @submit="enviarForm($event)">
      <label>Nome: </label><input type="text" v-model="name">
      <br><br>
      <label>E-mail: </label><input type="text" v-model="email">
      <br><br>
      <input type="submit" value="enviar">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    enviarForm(e) {
      e.preventDefault();

      const name = this.name;
      const email = this.email;
      console.log('Nome:', name);
      console.log('E-mail:', email);
      console.log('Formulário enviado!')
    }
  }
}
</script>

<style>

</style>