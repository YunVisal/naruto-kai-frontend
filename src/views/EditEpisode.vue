<template>
  <div class="edit-container">
    <div class="edit">
      <base-section title="Please input the below info">
        <form method="get" @submit.prevent="submit">
          <label for="episode">Episode: </label>
          <input type="text" placeholder="Episode" v-model="episode" />

          <label for="title">Title: </label>
          <input type="text" placeholder="Title" v-model="title" />

          <label for="duration">Duration: </label>
          <input type="text" placeholder="Duration" v-model="duration" />

          <label for="arc">Arc: </label>
          <select v-model="arc_id">
            <option
              v-for="arc in arcs"
              :value="arc.id"
              :key="arc.id"
              :selected="arc.id === arc_id"
            >
              {{ arc.title }}
            </option>
          </select>

          <label for="thumbnail">Thumbnail: </label>
          <input type="file" @change="onFileChange" />

          <label for="video">Video: </label>
          <input type="text" placeholder="Video url" v-model="video_url" />

          <input type="submit" value="Submit" v-if="!isLoading" />
          <p v-if="isError">Something went wrong!</p>
          <p v-if="isLoading">Loading...</p>
        </form>
        <button class="delete" v-if="!isLoading" @click="deleteEpisode">
          Delete
        </button>
      </base-section>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditEpisode",
  props: ["id"],
  data() {
    return {
      isError: false,
      isLoading: false,
      episode: "",
      title: "",
      duration: "",
      arc_id: "",
      thumbnail: null,
      video_url: "",
    };
  },
  computed: {
    arcs() {
      try {
        return this.$store.getters["arc/arcs"];
      } catch (err) {
        this.$router.push("/");
      }
    },
  },
  created() {
    if (this.id !== "0") {
      this.fetchEpisode();
    }
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.thumbnail = selectedFile;
    },
    fetchEpisode() {
      try {
        const episode = this.$store.getters["episode/episode"](this.id);
        this.episode = episode.episode;
        this.title = episode.title;
        this.duration = episode.duration;
        this.arc_id = episode.arc_id;
        this.thumbnail = episode.thumbnail_url;
        this.video_url = !episode.video_url ? "" : episode.video_url;
      } catch (err) {
        this.$router.push("/");
      }
    },
    async submit() {
      this.isLoading = true;
      try {
        const formData = new FormData();
        formData.append("episode", this.episode);
        formData.append("title", this.title);
        formData.append("arc_id", this.arc_id);
        formData.append("duration", this.duration);
        formData.append("thumbnail_url", this.thumbnail);
        formData.append("video_url", this.video_url);

        if (this.id !== "0") {
          await this.$store.dispatch("episode/updateEpisode", {
            id: this.id,
            data: formData,
          });
        } else {
          await this.$store.dispatch("episode/postEpisode", formData);
        }
        this.isLoading = false;
        this.$router.push("/admin");
      } catch (err) {
        this.isLoading = false;
        this.isError = true;
      }
    },
    async deleteEpisode() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("episode/deleteEpisode", this.id);
        this.isLoading = false;
        this.$router.push("/admin");
      } catch (err) {
        this.isLoading = false;
        this.isError = true;
      }
    },
  },
};
</script>

<style scoped>
.edit-container {
  height: 50vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 1.5em 0;
}

.edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  border: 1px solid #000;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form input[type="text"],
form input[type="password"],
form input[type="file"],
select {
  display: block;
  margin: 0.5em 0;
  padding: 0.5em;
  background-color: #e8ac4d;
  border: 1px solid #000;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
}

form input[type="submit"],
.delete {
  background-color: #195098;
  padding: 0.5em;
  color: #fff;
  border-radius: 5px;
  margin: 0.1em;
  outline: none;
}

p {
  color: #f00;
}

.delete {
  background-color: #f00;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .edit {
    width: 50%;
  }
}

@media screen and (max-width: 767px) {
  .edit {
    width: 90%;
  }
}
</style>