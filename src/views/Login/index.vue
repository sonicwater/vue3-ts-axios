<template>
  <div class="login">
    <div class="login-component-layout">
      <h2>Backend Manage System</h2>
      <el-form 
        ref="formLoginRef" 
        :model="formLogin" 
        :rules="rulesLogin"
        label-width="80px"
      >
        <el-form-item
          label="username"
          prop="username"
        >
          <el-input 
            type="text"
            v-model="formLogin.username"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="password"
          prop="password"
        >
          <el-input 
            type="password"
            v-model="formLogin.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="&nbsp;"
          class="text-left"
        >
          <el-button
            style="width: calc( 50% - 5px )"
            type="primary"
            @click="doLogin"
          >Login</el-button>

           <el-button
            style="width: calc( 50% - 5px )"
            type="primary"
            @click="doReset"
          >Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // computed,
  ref,Ref,
  reactive,
  toRefs,
  // nextTick,
  onMounted
} from 'vue';
import { ElDialog, ElMessage } from 'element-plus'
import { useFormLogin } from './use-state'
// import { ILogin } from '@/api/type';
import { login } from '@/api/api';
import { useRouter } from 'vue-router';
const { log, info, warn, error } = console;
export default {
  name: 'login',
  setup(){

    const router = useRouter();
    
    const { formLoginRef, formLogin, rulesLogin, formLoginReset } = useFormLogin();

    // 改变页数
    const doLogin = async () => {
      try {
        let valid = await formLoginRef.value.validate();
        if(valid){
          let res = await login(formLogin.value);
          log(JSON.stringify(res));
          if( res.code == 200 ){
            ElMessage.success(res.msg);
            router.push({
              name: 'Home',
              query:{
                str:'Home'
              }
            });
            return;
          }
          ElMessage.warning(res.msg);
        }
      } catch (error) {
        if(error.username){
          ElMessage.error(error.username[0].message);
          return;
        }
        if(error.password){
          ElMessage.error(error.password[0].message);
          return;
        }
      }
      
    }

    const doReset = () => {
      formLoginReset({
        username:'sonic',
        password:'111111q'
      });
    }

    // Hooks
    onMounted(()=>{
      
    });

    return {
      formLoginRef, formLogin, rulesLogin,
      doLogin,doReset
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  height: 100%;
  position: relative;
  &-component-layout{
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0,.1);
    border-radius: 5px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    
  }
}
</style>
