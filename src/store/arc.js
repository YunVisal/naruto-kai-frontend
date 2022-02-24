const arcModule = {
    namespaced: true,
    state() {
        return {
            arcs: null,
        };
    },
    actions: {
        async fetchArcs(context){
            const res = await fetch('https://raw.githubusercontent.com/YunVisal/naruto-kai-backend/master/public/data/arc.json');
            const result = await res.json();
            context.commit('setArc', result);
        }
    },
    mutations: {
        setArc(state, payload){
            state.arcs = payload;
        },
    },
    getters: {
        arcs(state){
            return JSON.parse(JSON.stringify(state.arcs));
        },
        arc: (state) => (arcId) => {
            const arcs = JSON.parse(JSON.stringify(state.arcs));
            return arcs.find(arc => arc.id === arcId);
        }
    }
};

export default arcModule;