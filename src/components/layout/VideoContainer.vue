<template>
  <iframe
    src="https://www.youtube.com/embed/xBLb8GIgagY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>

<style scoped>
iframe {
  display: block;
  width: 100%;
  height: 75vh;
}

@media screen and (max-width: 1024px) and (orientation: portrait){
    iframe{
        height: 50vh;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape){
    iframe{
        height: 100vh;
    }
}

@media screen and (max-width: 767px){
    iframe{
        height: 30vh;
    }
}
</style>