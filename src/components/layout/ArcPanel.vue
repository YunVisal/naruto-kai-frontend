<template>
  <router-link :to="'/arc/' + id" class="panel">
    <div class="item">
      <base-thumbnail
        url="https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg"
        duration=" "
      ></base-thumbnail>
    </div>
    <div class="item info">
      <h1>Prolouge - Land of Wave</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus officia asperiores aut facilis animi, atque voluptatum velit dolorem aspernatur?</p>
    </div>
  </router-link>
  <hr>
</template>

<script>
import BaseThumbnail from "../ui/BaseThumbnail.vue";

export default {
  name: "EpisodePanel",
  components: {
    BaseThumbnail,
  },
  props: ['id']
};
</script>

<style scoped>
.panel {
  display: flex;
}
.item {
  flex-basis: 25%;
  padding: 0.25em;
}
.info {
    flex-basis: 75%;
  }
h1 {
  margin-bottom: 0.5em;
}
hr { 
    display: block; 
    height: 1px;
    border: 0; 
    border-top: 1px solid #000;
    margin: 1em 0; 
    padding: 0; 
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