<template>
    <div class="i-dB">
        <h1 class="text">Inputs e Data Binding</h1>
        <form id="appForm">
            <input type="text" v-model="input_name" placeholder="Digite seu nome">
            <input type="submit" value="Enviar" v-on:click="submitForm">
        </form>
        <p>Seu nome é {{ name }}</p>
        <p>Data Binding: {{ input_name }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                input_name: ''
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault()
                console.log(this.input_name)
                this.name = this.input_name
            }
        }
    }
</script>

<style scoped>
    .i-dB {
        background-color: antiquewhite;
        padding: 40px 0;
        border: 2px solid rgb(255, 210, 152);
    }
    .text {
        padding: 30px 0;
    }
</style>