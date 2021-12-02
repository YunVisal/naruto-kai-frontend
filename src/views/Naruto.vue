<template>
    <section class="section-container">
        <base-section title="Naruto">
            <base-video-thumbnail 
                v-for="episode in episodes"
                :key="episode.episode"
                :episode="episode.episode"
                :title="'Ep' + episode.episode + ': ' +  episode.title"
                :arc="episode.arc"
                :url="episode.url"
                :duration="episode.duration"
            />
        </base-section>
    </section>
</template>

<script>
import BaseVideoThumbnail from '../components/ui/BaseVideoThumbnail.vue'

export default {
    name: 'Naruto',
    components: {
        BaseVideoThumbnail
    },
    data(){
        return {
            episodes: [
                {
                    episode: 1,
                    title: 'Naruto Uzumaki',
                    arc: 'Prolouge - Land of wave',
                    url: 'https://wallpapernoon.com/wp/full/naruto_wallpapers_63_5e64f.jpg',
                    duration: '1:30:32'
                },
                {
                    episode: 2,
                    title: 'Naruto Uzumaki',
                    arc: 'Prolouge - Land of wave',
                    url: 'https://wallpaperaccess.com/full/2500093.jpg',
                    duration: '1:30:32'
                },
                {
                    episode: 3,
                    title: 'Naruto Uzumaki',
                    arc: 'Prolouge - Land of wave',
                    url: 'https://wallpaperaccess.com/full/466433.jpg',
                    duration: '1:30:32'
                },
                {
                    episode: 4,
                    title: 'Naruto Uzumaki',
                    arc: 'Prolouge - Land of wave',
                    url: 'https://images4.alphacoders.com/874/thumb-1920-874582.png',
                    duration: '1:30:32'
                },
                {
                    episode: 5,
                    title: 'Naruto Uzumaki',
                    arc: 'Prolouge - Land of wave',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztwMB7tzVPgNT7gN3NKUwV4Qpw61MIqOeug&usqp=CAU',
                    duration: '1:30:32'
                },
            ]
        }
    }
}
</script>

<style scoped>
.section-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>