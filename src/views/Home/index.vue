<template>
  <layout>
    <router-view v-slot="{ Component }">
      <via-fade-transform>
        <keep-alive>
          <component
            :is="Component"
          />
        </keep-alive>
      </via-fade-transform>
    </router-view>
  </layout>
</template>

<script lang="ts">
// import { defineComponent, onMounted } from 'vue';
import Layout from './Layout/index.vue';
import ViaFadeTransform from "@/components/ViaFadeTransform.vue";


export default {
  name: 'Home',
  components: {
    Layout,ViaFadeTransform
  }
};
</script>

