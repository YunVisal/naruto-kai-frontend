<template>
  <section class="section-container">
    <base-section title="Naruto Shippuden">
      <base-video-thumbnail
        v-for="episode in episodes"
        :key="episode.episode"
        :episode="episode.episode"
        :title="'Ep' + episode.episode + ': ' + episode.title"
        :arc="episode.arc_id"
        :url="
          !episode.thumbnail_url
            ? 'https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg'
            : 'http://localhost:3000/thumbnail/' + episode.thumbnail_url
        "
        :duration="episode.duration"
      />
    </base-section>
  </section>
</template>

<script>
import BaseVideoThumbnail from "../components/ui/BaseVideoThumbnail.vue";

export default {
  name: "Shippuden",
  components: {
    BaseVideoThumbnail,
  },
  data() {
    return {};
  },
  computed: {
    episodes() {
      try {
        return this.$store.getters["episode/episodeCollection"](28, 73);
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