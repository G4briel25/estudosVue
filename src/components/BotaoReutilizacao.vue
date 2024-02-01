<template>
  <div>
    <button @click="ativar">Ativar</button>
    <br>
    <p v-show="ativou">Ativou!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativou: false,
    }
  },
  methods: {
    ativar() {
      this.ativou = !this.ativou;
    }
  }
}
</script>

<style>

</style>