<template>
  <div class="edit-container">
    <div class="edit">
      <base-section title="Please input the below info">
        <form method="get" @submit.prevent="login">
          <label for="episode">Episode: </label>
          <input type="text" name="episode" id="episode" />

          <label for="title">Title: </label>
          <input type="text" name="title" id="title" />
          
          <label for="arc">Arc: </label>
          <input type="text" name="arc" id="arc" />

          <label for="thumbnail">Thumbnail: </label>
          <input type="text" name="thumbnail" id="thumbnail" />

          <label for="video">Video: </label>
          <input type="text" name="video" id="video" />

          <input type="submit" value="Submit" />
          <p v-if="isError">Something went wrong!</p>
        </form>
      </base-section>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EditEpisode',
    data(){
        return {
            isError: false
        }
    },
    methods: {
        login(){
            this.$router.push('/admin');
            //this.isError = true;
        }
    }
}
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
form input[type="password"] {
  display: block;
  margin: 0.5em 0;
  padding: 0.5em;
  background-color: #e8ac4d;
  border: 1px solid #000;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
}

form input[type="submit"] {
  background-color: #195098;
  padding: 0.5em;
  color: #fff;
  border-radius: 5px;
  margin: 0.1em;
  outline: none;
}

p{
    color: #f00;
}

@media screen and (max-width: 1024px) {
    .edit{
        width: 50%;
    }
}

@media screen and (max-width: 767px) {
    .edit{
        width: 90%;
    }
}
</style>