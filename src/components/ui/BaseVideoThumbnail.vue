<template>
    <div class="video-thumbnail">
        <router-link :to="'/episode/' + episode">
            <base-thumbnail :url="url" :duration="duration"></base-thumbnail>
            <h1>{{title}}</h1>
            <p>{{arc}}</p>
        </router-link>
    </div>
</template>

<script>
import BaseThumbnail from './BaseThumbnail.vue'

export default {
    name: 'BaseVideoThumbnail',
    components: { 
        BaseThumbnail 
    },
    props: ['episode', 'title', 'arc', 'url', 'duration']
}
</script>

<style scoped>
.video-thumbnail{
    padding: 1em;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25%;
}

.video-thumbnail:hover{
    background-color: #c99542;
}

@media screen and (max-width: 1024px){
    .video-thumbnail{
        flex-basis: 50%;
    }
}

@media screen and (max-width: 767px){
    .video-thumbnail{
        padding: 1em 0;
        flex-basis: 100%;
    }
}
</style>