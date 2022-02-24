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
            : 'https://github.com/YunVisal/naruto-kai-backend/blob/master/public/thumbnail/' + episode.thumbnail_url + '?raw=true'
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
      const episodes = this.$store.getters["episode/episodeCollection"](28, 74);
      if (episodes[0]) {
        return episodes;
      } else {
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