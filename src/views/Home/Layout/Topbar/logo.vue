<template>
  <el-affix>
    <div
      class="items-center cursor-pointer"
      style="text-align:left !important;"
      @click="router.push({ name: 'Home' })"
    >
      <img
        src="@/assets/images/logo.svg"
        alt="logo"
        width="140"
        class="m-r-10"
        style="display: inline-block;vertical-align: middle;"
      />
    </div>
  </el-affix>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
export default {
  name:"logo",
  setup(){

    const goHome:Function = ():void => {

    }
    return {
      router
    }
  },
};
</script>

<style lang="scss" scoped>
  
</style>
