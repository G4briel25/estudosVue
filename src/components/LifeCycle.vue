<template>
    <div>
        <h1>Life Cycle</h1>
        <h4>Meu nome é: {{ nome }}</h4>
    </div>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'Alguma coisas'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = 'Gabriel'
            }, 1000)
        },
        mounted() {
            setTimeout(()=> {
                this.nome = 'Pedro'
            }, 2000)
        }
    }
</script>

<style scoped>
    div {
        padding: 50px 0;
        background-color: aquamarine;
        border: 2px solid rgb(33, 172, 125);
    }
</style>