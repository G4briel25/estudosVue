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

      <button @click="atualizar()">Atualizar Dados</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentVuex',
    created() {
      // const newUser = {
      //   name: 'Gabriel',
      //   email: 'gabriel@gmail.com',
      //   age: 20
      // }
      // this.$store.commit('storeUser', newUser)
    },
    methods: {
      atualizar() {
        const newUser = {
        name: 'Gabriel',
        email: 'gabriel@gmail.com',
        age: 20
      }
        this.$store.commit('storeUser', newUser)
      }
    }
}
</script>

<style>

</style>