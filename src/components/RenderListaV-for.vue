<template>
  <div>
    <h1>Render Lista V-for</h1>
    <br>
    <h3>Linguagens:</h3>
    <ul style="list-style: none;">
      <li
        v-for="(linguagem, index) in linguagens" :key="index"
      >
        {{ linguagem }}
      </li>
    </ul>

    <br><br>

    <h3>Tecnologias</h3>
    <ul style="list-style: none;">
      <li
        v-for="tecnologia in tecnologias" :key="tecnologia.id"
      >
        {{ tecnologia.tec }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linguagens: [
        'JavaScript',
        'PHP',
        'Python',
        'Java',
        'Ruby',
        'Pascal'
      ],
      tecnologias: [
        {id: 0, tec: 'React'},
        {id: 1, tec: 'Vue'},
        {id: 2, tec: 'Tailwind'},
        {id: 3, tec: 'Git'}
      ]
    }
  }
}
</script>

<style scoped>
  div {
    padding: 50px 0;
    background-color: rgb(228, 169, 169);
    border: 2px solid brown;
  }
</style>