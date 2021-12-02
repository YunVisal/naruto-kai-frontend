<template>
  <div class="detail">
    <h1>Prolouge - Land of Wave</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam
      officiis itaque totam sed error labore hic harum voluptate similique culpa
      reprehenderit illum nulla molestias nesciunt, tempore ullam nobis! Quasi.
      Quos repudiandae enim quis velit harum hic minus placeat quasi dolore!
      Voluptatibus impedit praesentium a? Suscipit harum, obcaecati ex magni
      quasi tempore iste architecto, commodi earum consequatur repellat culpa
      necessitatibus? Explicabo fugiat unde minus perferendis, illo totam, eius
      libero quasi odit deleniti id quos quibusdam, ea minima quisquam ducimus
      fuga vitae quam culpa expedita quod quis illum. Nemo, inventore non! Culpa
      reiciendis aperiam voluptas recusandae illum laudantium ipsam repudiandae,
      sed magni est mollitia maxime ducimus dolorem aliquid nostrum beatae
      doloribus non neque earum harum nemo! Neque ipsa distinctio repudiandae
      et. Asperiores voluptates pariatur reprehenderit alias, deleniti qui animi
      obcaecati voluptatibus modi commodi autem, labore officiis? Optio
      consequuntur recusandae fugiat, ratione culpa, explicabo minus, at cumque
      nam hic quod repudiandae minima!
    </p>
  </div>
  <base-section title="Episodes">
    <base-video-thumbnail
      v-for="index in 5"
      :key="index"
      :episode="index"
      title="Ep1: Naruto Uzumaki!"
      arc="Prolouge - Land of Wave"
      url="https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg"
      duration="1:30:21"
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