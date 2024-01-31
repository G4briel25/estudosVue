<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Curso Vue Matheus Battisti"/>
  <InputsDataBinding/>
  <LifeCycle/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputsDataBinding from './components/Inputs&DataBinding.vue';
import LifeCycle from './components/LifeCycle.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputsDataBinding,
    LifeCycle
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
