<template>
  <div class="h-full">
    <div
      class="fixed inset-0 bg-black bg-opacity-25 block md:hidden z-10"
    ></div>
    <div
      class="translate-x-0 absolute h-full flex flex-col md:relative z-50"
    >
      <div class="layout-sidebar">{{sidebarActive}}
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>数据表格</span>
            </template>
            <el-menu-item index="DataTable1">
              <i class="el-icon-menu"></i>
              <template #title>数据表格1</template>
            </el-menu-item>
            <el-menu-item index="DataTable2">
              <i class="el-icon-menu"></i>
              <template #title>数据表格2</template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-location"></i>
              <span>展开项</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <template #title>导航二1</template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <template #title>导航二2</template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  // computed,
  ref,Ref,
  reactive,
  toRefs,
  // nextTick,
  onMounted,
  watch
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { log, info, warn, error } = console;
export default defineComponent({
  name: "sidebar",
  setup(){
    const router = useRouter();

    let sidebarActive = ref('');

    const handleOpen = (key, keyPath) => {
      log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      log(key, keyPath);
    };

    const handleSelect = (key, keyPath) => {
      log("handleSelect");
      log(key, keyPath);
      sidebarActive.value = key;
      router.push({
        name:key
      })
    };

    // watch(()=>route,(newValue,oldValue)=>{
    //   log(newValue);
    //   log(oldValue);
    // })

    onMounted(()=>{
      log(router.currentRoute.value.name);
      sidebarActive.value = router.currentRoute.value.name;
    })

    return {
      handleOpen,
      handleClose,
      handleSelect,
      sidebarActive
    }
  }
});
</script>

<style lang="scss" scoped>
.layout-sidebar{
  width: 240px;
  height: 100%;
  padding: 10px 0;
  overflow: hidden auto;
  background-color: #f1f1f1;
}
::v-deep .el-menu{
  border-right: none;
  background-color: transparent;
}
::v-deep .el-submenu__title{
  text-align: left;
}
::v-deep .el-submenu .el-menu-item{
  text-align: left;
}
::v-deep .el-menu-item{
  text-align: left;
}
::v-deep .el-menu-item.is-active{
  background-color: #e1e1e1;
}
</style>
