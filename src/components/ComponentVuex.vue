<template>
  <div>
    <div>
      <h3>
        <!-- Consultar como banco de dados -->
        VUEX State
      </h3>
      Nome: {{ this.$store.state.user.name }} <br>
      Email: {{ this.$store.state.user.email }} <br>
      Idade: {{ this.$store.state.user.age }} <br>
    </div>

     <br><br><br>
     
    <div>
      <h3>
        <!-- Mutations para atualizar, por exemplo atualizar um campo de texto -->
        VUEX Mutations
      </h3>

      <button @click="updateUser()">Atualizar Dados</button>

      <br><br><br>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentVuex',
  
  methods: {
    updateUser() {
      const newUser = {
        name: 'Fulano',
        email: 'blabla@hotmail.com',
        age: 99
      }
      // this.$store.commit('storeUser', newUser)
      this.$store.dispatch('storeUser', newUser).then(() => {
        console.log('Terminou com sucesso')
      })
    }
  }
}
</script>

<style>

</style>