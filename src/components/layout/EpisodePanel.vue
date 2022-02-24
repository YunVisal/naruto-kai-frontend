<template>
  <router-link :to="route + id" class="panel">
    <div class="item">
      <base-thumbnail
        :url="
          !episode.thumbnail_url
            ? 'https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg'
            : 'https://github.com/YunVisal/naruto-kai-backend/blob/master/public/thumbnail/' + episode.thumbnail_url + '?raw=true'
        "
        :duration="episode.duration"
      ></base-thumbnail>
    </div>
    <div class="item info">
      <h1>Ep{{episode.episode}}: {{episode.title}}</h1>
      <p>{{arcTitle}}</p>
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
  props: ["id", "route"],
  computed: {
    episode() {
      try{
        return this.$store.getters["episode/episode"](this.id.toString());
      }catch(err){
        this.$router.push("/");
      }
    },
    arcTitle() {
      try{
        return this.$store.getters["arc/arc"](this.episode.arc_id).title;
      }catch(err){
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  width: 100%;
}
.item {
  flex-basis: 50%;
  justify-content: center;
  padding: 0.25em;
}
h1 {
  margin-bottom: 0.5em;
}
.panel:hover {
  background-color: #c99542;
}

@media screen and (max-width: 1024px){
  .info{
    flex-basis: 75%;
  }
}

@media screen and (max-width: 767px) {
  .item {
    flex-basis: 100%;
  }
  .panel {
    flex-direction: column;
  }
}
</style>