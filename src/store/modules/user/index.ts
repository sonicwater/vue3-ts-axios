import { Module } from 'vuex';
import RootStateTypes from '@/store/interface';
import UserModuleTypes from '@/store/modules/user/interface';
import Cookies from 'js-cookie';

const userModule: Module<UserModuleTypes,RootStateTypes> = {
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    userInfo: 'usermodule',
    token: Cookies.get('sonic_token')
  },
  getters: {
    getToken(state){
      return state.token;
    }
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token = Cookies.set('sonic_token',token);
    }
  },
  actions: {
    setToken(context,token){
      context.commit('SET_TOKEN',token);
    }
  },
  modules: {
  }
}
export default userModule;


