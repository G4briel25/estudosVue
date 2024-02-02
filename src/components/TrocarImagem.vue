<template>
    <button @click="$emit('trocarImagem')">Trocar Imagem de Perfil</button>
</template>

<script>
export default {
  emits: ['trocarImagem'],
}
</script>

<style scoped>
  button {
    padding: 5px 8px;
  }
</style>