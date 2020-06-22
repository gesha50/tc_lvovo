import Vue from 'vue'
import Vuex from 'vuex'
import getters from "@/vuex/getters/getters";
import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {},
    mutations,
    actions,
    getters,
});

export default store;