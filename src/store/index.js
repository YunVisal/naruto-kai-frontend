import { createStore } from 'vuex';

import episodeModule from './episode';
import arcModule from './arc';
import authModule from './auth'

export default createStore({
    modules: {
        episode: episodeModule,
        arc: arcModule,
        auth: authModule
    }
})