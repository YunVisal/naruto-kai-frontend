<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
  position: relative;
  min-height: 100vh;
}

body {
  margin: 0;
  background-color: #e8ac4d;
}

a{
    text-decoration: none;
    color: #000;
}

.content{
  margin-bottom: 5em;
}

</style>
