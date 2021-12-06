<template>
  <section class="episode-container">
    <div class="video-container">
      <video-container :url="episode.video_url" />
      <h1>Ep{{ episode.episode }}: {{ episode.title }}</h1>
      <p>{{ arcTitle }}</p>
    </div>
    <div class="next-container">
      <base-section title="Next Episode" v-if="Number(id) < 74">
        <episode-panel :id="Number(episode.episode) + 1" route="/episode/" />
      </base-section>
      <episode-list />
    </div>
  </section>
</template>

<script>
import VideoContainer from "../components/layout/VideoContainer.vue";
import EpisodePanel from "../components/layout/EpisodePanel.vue";
import EpisodeList from "../components/layout/EpisodeList.vue";

export default {
  name: "Episode",
  components: {
    VideoContainer,
    EpisodePanel,
    EpisodeList,
  },
  props: ["id"],
  computed: {
    episode() {
      try {
        return this.$store.getters["episode/episode"](this.id);
      } catch (err) {
        this.$router.push("/");
      }
    },
    arcTitle() {
      try {
        return this.$store.getters["arc/arc"](this.episode.arc_id).title;
      } catch (err) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.episode-container {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.video-container {
  flex-basis: 65%;
  padding: 1.5em;
}

h1 {
  margin: 0.5em 0;
}

.next-container {
  flex-basis: 35%;
}

@media screen and (max-width: 1024px) {
  .episode-container {
    flex-direction: column;
  }

  .video-container {
    flex-basis: 100%;
  }

  .next-container {
    flex-basis: 100%;
  }
}

@media screen and (max-width: 767px) {
  .episode-container {
    flex-direction: column;
  }

  .video-container {
    flex-basis: 100%;
  }

  .next-container {
    flex-basis: 100%;
  }
}
</style>