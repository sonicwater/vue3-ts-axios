<template>
  <topbar></topbar>
  <div
    class="layout-content flex inset-0"
  >
    <sidebar
      v-model:is-show="isSidebar"
      class="flex-shrink-0"
    ></sidebar>
    <div
      class="flex-grow h-full flex flex-col overflow-hidden"
      style="background-color:#F7F8FA;"
    >
      <slot></slot>1
    </div>
  </div>
</template>

<script lang="ts">
import { 
  ref,
  defineComponent, 
  onMounted 
} from 'vue';
import Topbar from "./Topbar/index.vue";
import Sidebar from "./Sidebar/index.vue";

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,Topbar
  },
  setup() {

    const isSidebar = ref<Boolean>(true);

    onMounted(()=>{

    });
    
    return {
      isSidebar
    }
  }
});
</script>

<style lang="scss" scoped>
  .layout-content{
    top: 60px;
    height: calc( 100% - 60px );
  }
</style>