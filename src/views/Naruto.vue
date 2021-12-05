<template>
  <section class="section-container">
    <base-section title="Naruto">
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
  </section>
</template>

<script>
import BaseVideoThumbnail from "../components/ui/BaseVideoThumbnail.vue";

export default {
  name: "Naruto",
  components: {
    BaseVideoThumbnail,
  },
  data() {
    return {};
  },
  computed: {
    episodes() {
      try {
        return this.$store.getters["episode/episodeCollection"](1, 27);
      } catch (err) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>