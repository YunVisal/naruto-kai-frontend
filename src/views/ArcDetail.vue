<template>
  <div class="detail">
    <h1>{{ arc.title }}</h1>
    <p>
      {{ arc.description }}
    </p>
  </div>
  <base-section title="Episodes">
    <base-video-thumbnail
      v-for="episode in episodes"
      :key="episode.episode"
      :episode="episode.episode"
      :title="'Ep' + episode.episode + ': ' + episode.title"
      :arc="episode.arc_id"
      :url="
          !episode.thumbnail_url
            ? 'https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg'
            : episode.thumbnail_url
        "
      :duration="episode.duration"
    />
  </base-section>
</template>

<script>
import BaseVideoThumbnail from "../components/ui/BaseVideoThumbnail.vue";

export default {
  name: "ArcDetail",
  components: {
    BaseVideoThumbnail,
  },
  props: ['id'],
  computed: {
    arc() {
      try{
        return this.$store.getters['arc/arc'](this.id);
      } catch (err) {
        this.$router.push('/');
      }
    },
    episodes() {
      try{
        return this.$store.getters['episode/episodeByArc'](this.id);
      } catch (err) {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.detail {
  margin: 1.5em;
}

h1 {
  margin-bottom: 0.5em;
}

p {
  text-align: justify;
}
</style>