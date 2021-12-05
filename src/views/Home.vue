<template>
  <section class="section-container" v-if="!isLoading">
    <base-section title="Naruto">
      <base-video-thumbnail
        v-for="episode in narutoEpisodes"
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
    <base-button title="Load More" url="/naruto" />
  </section>

  <section class="section-container" v-if="!isLoading">
    <base-section title="Naruto Shippuden">
      <base-video-thumbnail
        v-for="episode in shippudenEpisodes"
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
    <base-button title="Load More" url="/shippuden" />
  </section>
</template>

<script>
import BaseVideoThumbnail from "../components/ui/BaseVideoThumbnail.vue";

export default {
  name: "Home",
  components: {
    BaseVideoThumbnail,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    narutoEpisodes(){
        return this.$store.getters["episode/episodeCollection"](1,8);
    },
    shippudenEpisodes(){
        return this.$store.getters["episode/episodeCollection"](28,35);
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("episode/fetchEpisodes");
        await this.$store.dispatch("arc/fetchArcs");
        this.isLoading = false;
      } catch (err) {
        console.log(err);
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