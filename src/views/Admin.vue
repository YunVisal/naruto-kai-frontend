<template>
  <div class="admin-container">
    <h1>{{ isEpisode ? "Episode Dashboard" : "Arc Dashboard" }}</h1>
    <div class="list-container" v-if="!isLoading">
      <div class="tab-btn">
        <button :class="{ active: isEpisode }" @click="toggleTab()">
          Episode
        </button>
        <button :class="{ active: !isEpisode }" @click="toggleTab()">
          Arc
        </button>
      </div>
      <div class="tab">
        <div class="action">
          <base-button
            :title="isEpisode ? 'Add new Episode' : 'Add new Arc'"
            :url="isEpisode ? '/edit/episode/0' : '/edit/arc/0'"
          />
        </div>
        <base-section title="Episode" v-if="isEpisode">
          <div class="panel-container" v-for="episode in episodes" :key="episode.episode">
            <episode-panel :id="Number(episode.episode)" route="/edit/episode/" />
          </div>
        </base-section>
        <base-section title="Arc" v-else>
          <arc-panel v-for="arc in arcs" :key="arc.id" :id="arc.id" route="/edit/arc/" />
        </base-section>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodePanel from "../components/layout/EpisodePanel.vue";
import ArcPanel from "../components/layout/ArcPanel.vue";

export default {
  name: "Admin",
  components: {
    EpisodePanel,
    ArcPanel,
  },
  data() {
    return {
      isEpisode: true,
      isLoading: false,
    };
  },
  computed: {
    episodes() {
      try {
        return this.$store.getters["episode/episodes"];
      } catch (err) {
        this.$router.push("/");
      }
    },
    arcs() {
      try {
        return this.$store.getters["arc/arcs"];
      } catch (err) {
        this.$router.push("/");
      }
    },
  },
  created() {
    if (!this.$cookies.isKey("_session")) {
      this.$router.push("/login");
      return;
    }

    if (!this.$store.getters["auth/token"]) {
      this.$store.commit("auth/setToken", this.$cookies.get("_session"));
    }

    this.loadData();
  },
  methods: {
    toggleTab() {
      this.isEpisode = !this.isEpisode;
    },
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
.admin-container {
  margin: 1.5em;
}

.list-container {
  margin: 1em 0;
}

.tab-btn button {
  width: 5em;
  padding: 0.5em;
  background-color: #e8ac4d;
  border: 1px solid #000;
  border-radius: 5px 5px 0 0;
}

.tab-btn button:hover,
.tab-btn button.active {
  background-color: #000;
  color: #e8ac4d;
}

.tab {
  border: 1px solid #000;
}

.action {
  display: flex;
  margin: 0.5em 1em;
}

.panel-container {
  flex-basis: 50%;
}

@media screen and (max-width: 1024px) {
  .panel-container {
    flex-basis: 100%;
    margin: 1em 0;
  }
}
</style>