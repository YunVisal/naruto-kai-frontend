<template>
    <div class="video-thumbnail">
        <router-link :to="'/episode/' + episode">
            <base-thumbnail :url="url" :duration="duration"></base-thumbnail>
            <h1>{{title}}</h1>
            <p>{{arcTitle}}</p>
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
    props: ['episode', 'title', 'arc', 'url', 'duration'],
    computed: {
        arcTitle(){
            try{
                return this.$store.getters['arc/arc'](this.arc).title;
            }catch(err){
                this.$router.push("/");
            }
        }
    }
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