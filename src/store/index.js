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
          commit('setAnalysis', res.data);
        })
      },
      Copy ({ commit }) {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', this.content)
        if (commit('judgeClient') === 'iOS') {
          input.setAttribute('readonly', 'readonly')
          input.setSelectionRange(0, -1)
        } else {
          input.select()
        }
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
      },
    },
    modules
  })
}
