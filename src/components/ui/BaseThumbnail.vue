<template>
    <img :src="url" alt="thumbnail" class="thumbnail">
    <h5>{{duration}}</h5>
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
.thumbnail{
    width: 100%;
    height: auto;
    border: 1px solid #000;
}

h5{
    position: absolute;
    right: 1.5em;
    top: calc(100% - 7em);
    color: #fff;
    background-color: #000;
}
</style>