import { Module } from 'vuex';
import RootStateTypes from '@/store/interface';
import TestModuleTypes from '@/store/modules/test/interface';

const testModule: Module<TestModuleTypes,RootStateTypes> = {
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    name: 'testmodule',
    count: 0
  },
  getters :{
    getTestName(state){
      return state.name
    },
    getTestCount(state){
      return state.count
    }
  },
  mutations: {
    ADD_COUNT(state){
      state.count += 1;
    }
  },
  actions: {
  },
  modules: {
  }
}
export default testModule;


