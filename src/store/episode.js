const episodeModule = {
    namespaced: true,
    state() {
        return {
            episodes: null,
            currentEpisode: null,
            nextEpisode: null,
        };
    },
    actions: {
        async fetchEpisodes(context){
            const res = await fetch('http://localhost:3000/api/episode');
            const result = await res.json();
            context.commit('setEpisode', result.data);
        },
    },
    mutations: {
        setEpisode(state, payload){
            state.episodes = payload;
        },
    },
    getters: {
        episodes(state){
            try{
                return JSON.parse(JSON.stringify(state.episodes));
            }catch(err){
                console.log(err)
                throw new Error('Something went wrong!');
            }
        },
        episodeCollection: (state) => (start, finish) => {
            const data = [];
            const episodes = JSON.parse(JSON.stringify(state.episodes));
            for(let i = start; i <= finish; i++){
                data.push(episodes.find(episode => Number(episode.episode) === i))
            }
            return data;
        },
        episode: (state) => (id) => {
            try{
                const episodes = JSON.parse(JSON.stringify(state.episodes));
                return episodes.find(episode => episode.episode === id);
            } catch(err){
                throw new Error('Something went wrong!');
            }
        },
        episodeByArc: (state) => (arcId) => {
            const data = [];
            const episodes = JSON.parse(JSON.stringify(state.episodes));
            episodes.forEach(episode => {
                if(episode.arc_id === arcId){
                    data.push(episode)
                }
            });
            return data;
        }
    }
};

export default episodeModule;