const arcModule = {
    namespaced: true,
    state() {
        return {
            arcs: null,
        };
    },
    actions: {
        async fetchArcs(context){
            const res = await fetch('http://18.181.207.102:80/api/arc');
            const result = await res.json();
            context.commit('setArc', result.data);
        },
        async postArc(context, payload){
            const res = await fetch('http://18.181.207.102:80/api/arc/', {
                method: 'POST',
                headers: {
                    'Authorization': context.rootGetters['auth/token']
                },
                body: payload
            });
            const result = await res.json();
            console.log(result);
        },
        async updateArc(context, payload){
            const res = await fetch('http://18.181.207.102:80/api/arc/' + payload.id, {
                method: 'PUT',
                headers: {
                    'Authorization': context.rootGetters['auth/token']
                },
                body: payload.data
            });
            const result = await res.json();
            console.log(result);
        },
        async deleteArc(context, payload){
            const res = await fetch('http://18.181.207.102:80/api/arc/' + payload, {
                method: 'DELETE',
                headers: {
                    'Authorization': context.rootGetters['auth/token']
                }
            });
            const result = await res.json();
            console.log(result);
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