<template>
  <iframe
    class="video"
    frameborder="0" 
    :src="!url ? 'https://mega.nz/embed/kw1WQB6R#JuuoNBsyRfJr0N-ALwStjVVJEizSRdAfaUPeSy27Voo' : url" 
    allowfullscreen 
  ></iframe>
</template>

<script>
export default {
  name: 'VideoContainer',
  props: ['url']
}
</script>

<style scoped>
iframe {
  display: block;
  width: 100%;
  height: 75vh;
}

@media screen and (max-width: 1024px) and (orientation: portrait) {
  iframe {
    height: 50vh;
  }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  iframe {
    height: 100vh;
  }
}

@media screen and (max-width: 767px) {
  iframe {
    height: 30vh;
  }
}
</style>