<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Curso Vue Matheus Battisti"/>
  <InputsDataBinding/>
  <LifeCycle/>
  <AtributosDinamicos/>
  <RenderListaVFor/>
  <EventsClickSubmit/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputsDataBinding from './components/Inputs&DataBinding.vue';
import LifeCycle from './components/LifeCycle.vue';
import AtributosDinamicos from './components/AtributosDinamicos.vue';
import RenderListaVFor from './components/RenderListaV-for.vue';
import EventsClickSubmit from './components/EventsClickSubmit.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputsDataBinding,
    LifeCycle,
    AtributosDinamicos,
    RenderListaVFor,
    EventsClickSubmit
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
