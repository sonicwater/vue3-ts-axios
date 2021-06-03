<template>
  <el-affix>
    <div
      class="items-center cursor-pointer"
      style="text-align:left !important;"
      @click="goHome"
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

export default {
  name:"logo",
  setup(){

    const router = useRouter();

    const goHome:Function = ():void => {
      router.push({
        name:'Home'
      })
    }

    return {
      router
    }
  },
};
</script>

<style lang="scss" scoped>
  
</style>
