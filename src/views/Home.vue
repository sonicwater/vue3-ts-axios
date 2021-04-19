<template>
  <div class="home">
  	<a-button 
      type="primary" 
      class="m-r-10"
    >登录</a-button>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { login } from '@/api/api';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
  	onMounted(()=>{
  		login({
  			username:'admin',
  			password:'123456'
  		});
  	})
  }
});
</script>
