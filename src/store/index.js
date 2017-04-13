import Vue from 'vue';
import Vuex from 'vuex';
import { ADD, CHANGE_USERS } from '../constants/mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    msg: 'Welcome here',
    users: [],
  },
  mutations: {
    increment(_state) {
      // Object.assign(state, { count: state.count + 1 });
      const state = _state;
      state.count += 1;
    },
    [ADD](state, payload) {
      Object.assign(state, { count: payload + state.count });
    },
    [CHANGE_USERS](state, users) {
      Object.assign(state, { users });
    },
  },
  actions: {
    async actionA(/** { commit } */) {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        /** .then((resp ) => {
          // we could commit something here
        })*/;
    },
    async loadUsers({ dispatch, commit }) {
      const users = await dispatch('actionA');
      commit(CHANGE_USERS, users);
    },
    // loadUsers({ dispatch, commit }) {
    //   return dispatch('actionA').then(users => commit(CHANGE_USERS, users));
    // },
  },
});

export default store;
