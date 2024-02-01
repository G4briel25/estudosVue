<template>
  <div>
    <h1>Multiplos Eventos</h1>
    <br>
    <button 
      @click="primeiro(txt1), segundo(txt2), terceiro(txt3)"
     >
      Ativar eventos multiplos
    </button>
    <br>
    <p v-show="exibir">{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exibir: false,
      multiplos_eventos: '',
      txt1: 'Primeiro evento ativado!',
      txt2: 'Segundo evento ativado!',
      txt3: 'Terceiro evento ativado!'
    }
  },
  methods: {
    primeiro() {
      this.exibir = !this.exibir;
      this.multiplos_eventos = this.txt1;
    },
    segundo() {
      setTimeout(()=> this.multiplos_eventos = this.txt2, 2000)
    },
    terceiro() {
      setTimeout(()=> this.multiplos_eventos = this.txt3, 3500)
    }
  }
}
</script>

<style scoped>
  div {
    color: #fff;
    padding: 50px 0;
    background-color: rgb(82, 119, 119);
    border: 2px solid rgb(27, 70, 70);
  }
</style>