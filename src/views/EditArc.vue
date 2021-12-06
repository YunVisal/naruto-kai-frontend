<template>
  <div class="edit-container">
    <div class="edit">
      <base-section title="Please input the below info">
        <form method="get" @submit.prevent="submit">
          <label for="id">Id: </label>
          <input type="text" placeholder="id" v-model="arcId" />

          <label for="title">Title: </label>
          <input type="text" placeholder="title" v-model="title" />

          <label for="thumbnail">Thumbnail: </label>
          <input type="file" @change="onFileChange" />

          <label for="description">Description: </label>
          <textarea
            cols="30"
            rows="10"
            placeholder="description" 
            v-model="description"
          ></textarea>

          <input type="submit" value="Submit" />
          <p v-if="isError">Something went wrong!</p>
        </form>
        <button class="delete" v-if="!isLoading" @click="deleteArc">
          Delete
        </button>
      </base-section>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditArc",
  props: ["id"],
  data() {
    return {
      isError: false,
      isLoading: false,
      arcId: "",
      title: "",
      thumbnail: null,
      description: "",
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
      this.fetchArc();
    }
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.thumbnail = selectedFile;
    },
    fetchArc() {
      try {
        const arc = this.$store.getters["arc/arc"](this.id);
        this.arcId = arc.id;
        this.title = arc.title;
        this.thumbnail = arc.thumbnail_url;
        this.description = arc.description;
      } catch (err) {
        this.$router.push("/");
      }
    },
    async submit() {
      this.isLoading = true;
      try {
        const formData = new FormData();
        formData.append("id", this.arcId);
        formData.append("title", this.title);
        formData.append("thumbnail_url", this.thumbnail);
        formData.append("description", this.description);

        if(this.id !== "0"){
          await this.$store.dispatch("arc/updateArc", {
            id: this.id,
            data: formData,
          });
        }
        else{
          await this.$store.dispatch("arc/postArc", formData);
        }
        this.isLoading = false;
        this.$router.push("/admin");
      } catch (err) {
        this.isError = true;
      }
    },
    async deleteArc() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("arc/deleteArc", this.id);
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
form input[type="file"],
textarea {
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