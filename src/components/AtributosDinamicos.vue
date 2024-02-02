<template>
    <div>

        <h1>Atributos Dinamicos</h1>
        <br>
        <!-- Imagem do avatar -->
        <img :src="imgAvatar" :alt="avatar" width="100">
        <h3>Gabriel</h3>
        <p><strong>Meu site: </strong><a v-bind:href="meu_link" target="_blank">Clique aqui</a></p>
        <br><br>
        

        <!-- METODOS -->
        <button @click="showEmail">{{ textBotao }}</button>
        <p v-show="mostrar_email">E-mail: {{ email }}</p>
        
    
    </div>
  </template>

<script>

  export default {
    data() {
      return {
        meu_link: 'https://www.google.com',
        email: 'warmerishoth@gmail.com',
        mostrar_email: false,
        textBotao: 'Mostar email',
        avatar: 'Gabriel Jaune Ribera',
        imgAvatar: '/img/imgAvatar.png'
      }
    },
    methods: {
      showEmail() {
        console.log('Clicado!')
        this.mostrar_email = !this.mostrar_email
        if (!this.mostrar_email) {
          this.textBotao = 'Mostrar email'
        } else {
          this.textBotao = 'Esconder email'
        }
      }
    }
  }
</script>

<style scoped>
    div {
      padding: 50px 0;
      background-color: rgb(240, 235, 179);
      border: 2px solid darkkhaki;
    }
    
    img {
      border: 1.5px solid chocolate;
      padding: 5px;
    }
</style>