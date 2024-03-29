import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  user: {
    isLogin:window.localStorage.getItem('token') ? true : false
  },
  cartCount:0,
  isFirst: false
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})

/*

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


*/ 
