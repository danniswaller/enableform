import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 状态
    currentPage:null,
  },
  mutations: { // 状态改变记录
      ['changeCurrentPage'](state, currentPage){
          state.currentPage = currentPage;
      }
  },
  actions: { // 动作
      changeCurrentPage({commit}, currentPage){
          commit('changeCurrentPage', currentPage);
      }

  }
})
