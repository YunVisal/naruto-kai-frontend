<template>
    <div class="admin-container">
        <h1>{{ isEpisode ? 'Episode Dashboard' : 'Arc Dashboard' }}</h1>
        <div class="list-container">
            <div class="tab-btn">
                <button :class="{active: isEpisode}" @click="toggleTab()">Episode</button>
                <button :class="{active: !isEpisode}" @click="toggleTab()">Arc</button>
            </div>
            <div class="tab">
                <div class="action">
                    <base-button :title="isEpisode ? 'Add new Episode' : 'Add new Arc'" :url=" isEpisode ? '/edit/episode/' : '/edit/arc/0' " />
                </div>
                <base-section title="Episode" v-if="isEpisode">
                    <div class="panel-container" v-for="index in 10" :key="index">
                        <episode-panel :url="'/edit/episode/'" />
                    </div>
                </base-section>
                <base-section title="Arc" v-else>
                    <arc-panel
                        v-for="index in 10"
                        :key="index"
                        :id="index"
                        url="/edit/arc/"
                    />
                </base-section>
            </div>
        </div>
    </div>
</template>

<script>
import EpisodePanel from '../components/layout/EpisodePanel.vue';
import ArcPanel from '../components/layout/ArcPanel.vue';

export default {
    name: 'Admin',
    components: {
        EpisodePanel,
        ArcPanel
    },
    data(){
        return {
            isEpisode: true
        }
    },
    methods: {
        toggleTab(){
            this.isEpisode = !this.isEpisode;
        }
    }
}
</script>

<style scoped>
.admin-container{
    margin: 1.5em;
}

.list-container{
    margin: 1em 0;
}

.tab-btn button {
    width: 5em;
    padding: .5em;
    background-color: #e8ac4d;
    border: 1px solid #000;
    border-radius: 5px 5px 0 0;
}

.tab-btn button:hover,
.tab-btn button.active {
    background-color: #000;
    color: #e8ac4d;
    
}

.tab{
    border: 1px solid #000;
}

.action{
    display: flex;
    margin: .5em 1em;
}

.panel-container{
    flex-basis: 50%;
}

@media screen and (max-width: 1024px) {
    .panel-container{
        flex-basis: 100%;
    }
}
</style>