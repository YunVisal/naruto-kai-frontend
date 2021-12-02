<template>
    <div class="thumb-container">
        <img :src="url" alt="thumbnail" class="thumbnail">
        <h5>{{duration}}</h5>
    </div>
</template>

<script>
export default {
    name: 'BaseThumbnail',
    props: ['url', 'duration'],
    computed: {
        imgStyle(){
            return {
                backgroundImage:`url(${this.url})`,
            }
        }
    }
}
</script>

<style scoped>
.thumb-container{
    position: relative;
}

.thumbnail{
    width: 100%;
    height: auto;
    border: 1px solid #000;
}

h5{
    position: absolute;
    right: 0%;
    bottom: 5%;
    color: #fff;
    background-color: #000;
}
</style>