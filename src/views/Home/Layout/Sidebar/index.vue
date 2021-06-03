<template>
  <div class="h-full">
    <div
      v-if="isShow"
      class="fixed inset-0 bg-black bg-opacity-25 block md:hidden z-10"
    ></div>
    <div
      :class="[
        isShow ? 'translate-x-0' : '-translate-x-60',
      ]"
      class="absolute h-full flex flex-col md:relative z-50"
    >
      <div class="layout-sidebar">
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
        ds<br>
      </div>
    </div>
  </div>
</template>

<script>
// import SidebarItem from "./Item";
// import Logo from "./Logo";
// import sidebarConfig from "@/config/sidebar";
// import { isSidebarLogo } from "@/config/index";
export default {
  components: {
    // SidebarItem,
    // Logo,
  },
//   inject: ["$_screen"],
  props: {
    
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
        
    };
  },
  computed: {
    isCollapse() {
      return this.isFold;
    },
    //菜单默认选中
    // defaultActive() {
    //   return this.getMenuActiveId(this.sidebarArr, {
    //     rule: (item) => item.name === this.$route.name,
    //   });
    // },
  },
  watch: {
    
  },
  created() {
    
  },
  mounted(){
      
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.layout-sidebar{
  width: 240px;
  height: 100%;
  padding: 20px;
  overflow: hidden auto;
  background-color: #f1f1f1;
}
</style>
