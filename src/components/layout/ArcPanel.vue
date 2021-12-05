<template>
  <router-link :to="'/arc/' + id" class="panel">
    <div class="item">
      <base-thumbnail
        :url="
          !arc.thumbnail_url
            ? 'https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg'
            : arc.thumbnail_url
        "
        duration=""
      ></base-thumbnail>
    </div>
    <div class="item info">
      <h1>{{ arc.title }}</h1>
      <p>{{ arc.description.substring(0, 200) + "..." }}</p>
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
  props: ['id'],
  computed: {
    arc() {
      try{
        return this.$store.getters['arc/arc'](this.id);
      } catch (err) {
        this.$router.push('/');
      }
    }
  }
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