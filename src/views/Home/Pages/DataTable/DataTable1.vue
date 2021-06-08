<template>
  <div>DataTable1
    {{moduleTest}}-
    <el-button
      type="success"
      @click="handlerChnage"
    >add</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // computed,
  ref,Ref,
  reactive,
  toRefs,
  nextTick,
  onMounted,
  computed
} from 'vue';
import { useStore } from '@/store';


export default {
  name: 'DataTable1',
  components: {
      
  },
  setup(){
    const store = useStore();
    const moduleTest = computed(()=>store.state.test1);
    const handlerChnage = () => {
      store.commit('CHANGE_TEST','test2021');
    }

    onMounted(()=>{
      console.log(store.state);
    })

    return {
      moduleTest,
      handlerChnage
    }
  }
};
</script>

