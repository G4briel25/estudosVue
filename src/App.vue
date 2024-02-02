<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Curso Vue Matheus Battisti"/>
    <InputsDataBinding/>
    <LifeCycle/>
    <AtributosDinamicos/>
    <RenderListaVFor/>
    <EventsClickSubmit/>
    <MultiplosEventos/>
    <PropsDeTeste :propEmail="propEmailAC" :estar_logado="true" />
    <EventoEmit/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputsDataBinding from './components/Inputs&DataBinding.vue';
import LifeCycle from './components/LifeCycle.vue';
import AtributosDinamicos from './components/AtributosDinamicos.vue';
import RenderListaVFor from './components/RenderListaV-for.vue';
import EventsClickSubmit from './components/EventsClickSubmit.vue';
import MultiplosEventos from './components/MultiplosEventos.vue';
import PropsDeTeste from './components/PropsDeTeste.vue';
import EventoEmit from './components/EventoEmit.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputsDataBinding,
    LifeCycle,
    AtributosDinamicos,
    RenderListaVFor,
    EventsClickSubmit,
    MultiplosEventos,
    PropsDeTeste,
    EventoEmit
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
