import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pages: [
            { 
                id: 0,
                pageElements: [],
                isActive: true,
                backgroundColor: '#fff'
            }
        ],
        elements: []
    },
    getters: {
        getPages: state => state.pages
    }
});