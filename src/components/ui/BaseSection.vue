<template>
    <section class="thumbnail-section">
        <h1>{{title}}</h1>
        <hr />
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BaseSection',
    props: ['title']
}
</script>

<style scoped>
.thumbnail-section{
    margin: 1.5em;
}

.thumbnail-section h1{
    font-size: 2em;
}

hr { 
    display: block; 
    height: 1px;
    border: 0; 
    border-top: 1px solid #000;
    margin: 1em 0; 
    padding: 0; 
}

.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>