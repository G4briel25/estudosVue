<template>
  <div>
    <h1>Props</h1>
    <br>
    <p><strong>Nick: </strong>{{ nome }}</p>
    <p><strong>Idade: </strong>{{ idade }}</p>
    <p><strong>E-mail: </strong>{{ email }}</p>
    <p><strong>Segundo email: </strong>{{ propEmailAC }}</p>
    <p v-if="estar_logado"><strong>Meu Portifolio: </strong><a href="https://github.com/G4briel25" target="_blank">Meu GitHub</a></p>
    <p><strong>Bio:</strong></p>
    <p style="width: 550px; height: 100px; margin: auto;">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque deleniti 
      recusandae suscipit alias laboriosam iure dolorum maiores veritatis soluta 
      consectetur eos asperiores nesciunt corporis perferendis sunt, facere quae cumque.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: 'Minossauro',
      idade: 20,
      email: 'minossauro@gmail.com',
      propEmailAC: 'joaozinho@email.com',
    }
  },
  // props: ['estar_logado'], acessar a prop por array
  props: {
    propEmail: String,
    estar_logado: Boolean,
  }
}
</script>

<style>

</style>