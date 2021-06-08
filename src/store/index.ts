import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import RootStateTypes, { AllStateTypes } from '@/store/interface';

// 引入子模块
import testModule from '@/store/modules/test';
import userModule from '@/store/modules/user';

export default createStore<RootStateTypes>({
  state: {
    test1:'test'
  },
  getters :{
    getTest(state){
      return state.test1
    }
  },
  mutations: {
    CHANGE_TEST(state,val){
      state.test1 = val;
    }
  },
  actions: {
  },
  modules: {
    test:testModule,
    user:userModule
  }
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');
export function useStore<T=AllStateTypes>(){
  return baseUseStore<T>(key);
}