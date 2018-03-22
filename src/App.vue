<template>
  <div id="app">
    <h1>Пример выводы секретов</h1>
    <hr>
    <h2>Секреты</h2>
    <SecretList/>
    <main>
    <img src="./assets/logo.png" alt="Vue.js PWA">

    </main>
  </div>
</template>

<script>
import SecretList from './components/SecretList'
    
export default {
  name: 'app',
  components: { SecretList }  
}
</script>

<style>

body {
  margin: 0;
  font-family: 'Roboto';
  src: url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
}   

</style>
