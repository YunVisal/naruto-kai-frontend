<template>
    <section class="episode-container">
        <div class="video-container">
            <video-container />
            <h1>Ep1: Naruto Uzumaki</h1>
            <p>Prolouge - Land of wave</p>
        </div>
        <div class="next-container">
            <base-section title="Next Episode">
                <episode-panel />
            </base-section>
            <episode-list />
        </div>
    </section>
</template>

<script>
import VideoContainer from '../components/layout/VideoContainer.vue';
import EpisodePanel from '../components/layout/EpisodePanel.vue';
import EpisodeList from '../components/layout/EpisodeList.vue';

export default {
    name: 'Episode',
    components: {
        VideoContainer,
        EpisodePanel,
        EpisodeList
    }
}
</script>

<style scoped>
.episode-container{
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.video-container {
  flex-basis: 70%;
  padding: 1.5em;
}

h1{
    margin: .5em 0;
}

.next-container {
  flex-basis: 30%;
}

@media screen and (max-width: 1024px){
    .episode-container{
        flex-direction: column;
    }

    .video-container {
        flex-basis: 100%;
    }

    .next-container {
        flex-basis: 100%;
    }
}

@media screen and (max-width: 767px){
    .episode-container{
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