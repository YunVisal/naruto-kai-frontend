<template>
  <router-link to="/episode/2" class="panel">
    <div class="item">
      <base-thumbnail
        url="https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg"
        duration="1:30:21"
      ></base-thumbnail>
    </div>
    <div class="item info">
      <h1>Ep2: Naruto Uzumaki</h1>
      <p>Prolouge - Land of wave</p>
    </div>
  </router-link>
</template>

<script>
import BaseThumbnail from "../ui/BaseThumbnail.vue";

export default {
  name: "EpisodePanel",
  components: {
    BaseThumbnail,
  },
};
</script>

<style scoped>
.panel {
  display: flex;
}
.item {
  flex-basis: 50%;
  padding: 0.25em;
}
h1 {
  margin-bottom: 0.5em;
}
.panel:hover {
  background-color: #c99542;
}

@media screen and (max-width: 1024px) {
  .info {
    flex-basis: 75%;
  }
}

@media screen and (max-width: 767px) {
  .panel {
    flex-direction: column;
  }
}
</style>