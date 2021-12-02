<template>
    <router-link class="btn" :to="url">{{title}}</router-link>
</template>

<script>
export default {
    name: 'Button',
    props: ['url', 'title']
}
</script>

<style scoped>
.btn{
    background-color: #195098;
    padding: .5em;
    color: #fff;
    border-radius: 5px;
    margin: .1em;
}

.btn:hover{
    background-color: #154481;
}
</style>