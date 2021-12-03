<template>
    <section class="arc-list">
        <h1>Arc List</h1>
        <p>The Naruto's Storyline is divided into arcs which connected to each other.</p>
        <div class="list">
            <arc-panel
                v-for="index in 10"
                :key="index"
                :id="index"
                url="/arc/"
            />
        </div>
    </section>
</template>

<script>
import ArcPanel from '../components/layout/ArcPanel.vue';

export default {
    name: 'ArcList',
    components: {
        ArcPanel
    }
}
</script>

<style scoped>
.arc-list{
    margin: 1.5em;
}

.list{
    margin: 1em 0;
}
</style>