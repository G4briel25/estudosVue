<template>
  <div>
    <h1>Evento $Emit</h1>
    <br>
    <img :src="meuAvatar" alt="Avatar" width="100">
    <br>

    <!-- Botão de trocar a imagem importado -->
    <TrocarImagem @trocar-imagem="mudarImagem()"/>
  </div>
</template>

<script>
import TrocarImagem from './TrocarImagem.vue';

export default {
    components: { TrocarImagem },
    data() {
      return {
        meuAvatar: '/img/imgAvatar.png'
      }
    },
    methods: {
      mudarImagem() {
        console.log('Você trocou de imagem do avatar');
        this.meuAvatar = "/img/imgAvatar2.png"
      }
    }
}
</script>

<style scoped>
  div {
      padding: 50px 0;
      background-color: rgb(255, 167, 211);
      border: 2px solid hotpink;
    }
</style>