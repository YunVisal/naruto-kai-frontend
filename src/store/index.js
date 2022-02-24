import { createStore } from 'vuex';

import episodeModule from './episode';
import arcModule from './arc';

export default createStore({
    modules: {
        episode: episodeModule,
        arc: arcModule,
    }
})