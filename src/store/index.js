import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import state from './state'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state,
    mutations,
    getters: {
      userList: state => state.userList,
      movieList: state => state.movieList,
      analysisList: state => state.analysisList
    },
    actions: {
      getUserlist ({ commit }) {
        return axios.get('/api/getUserlist').then((res) => {
            commit('setUserlist', res.data.userlist)
        })
      },
      getMovielist ({ commit }) {
        return axios.get('/api/getMovielist').then((res) => {
          commit('setMovielist', res.data.movielist)
        })
      },
      getAnalysis ({ commit }) {
        return axios.get('/api/getAnalysis').then((res) => {
          console.log('后端返回的数据...');
          console.log(res);
          commit('setAnalysis', res.data);
        })
      },
    },
    modules
  })
}
