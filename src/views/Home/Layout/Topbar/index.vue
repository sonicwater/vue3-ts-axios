<template>
  <el-affix>
    <div class="layout-top">
      <el-row>
        <el-col :span="12">
          <div class="pl-14">
            <logo /> 
          </div>
        </el-col>
        <el-col :span="12" class="pr-14 text-right">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid" style="color:#fff"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
      
    </div>
  </el-affix>
</template>

<script lang="ts">
// import SidebarItem from "./Item";
// import Logo from "./Logo";
// import sidebarConfig from "@/config/sidebar";
// import { isSidebarLogo } from "@/config/index";
import Logo from "./logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
  .layout-top{
    position: relative;
    width: 100%;
    white-space: nowrap;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0px 1px 11px 1px rgb(12 81 160 / 13%);
    box-shadow: 0px 1px 11px 1px rgb(12 81 160 / 13%);
    font-size: 16px;
    color: #2a3347;
    z-index: 200;
    .el-dropdown-link{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ccc;
      display: block;
      line-height: 30px;
      text-align: center;
    }
  }
</style>
