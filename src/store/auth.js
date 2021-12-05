const authModule = {
    namespaced: true,
    state(){
        return {
            token: ''
        }
    },
    actions: {
        async login(context, payload){
            const data = JSON.stringify({
                email: payload.email,
                password: payload.password
            });
            const res = await fetch(
                'http://localhost:3000/api/auth/login',
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                }
            );
            const result = await res.json();
            context.commit('setToken', result.token);
        }
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
        }
    },
    getters: {
        token(state){
            return state.token;
        }
    }
}

export default authModule;