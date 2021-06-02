import { ref } from 'vue'

// 引入接口
import { ILogin } from '@/api/type';

// 验证密码规则
const checkPassword = (rule:any, value:string, callback:Function) => {
  if ( value.length <= 0 ){
    callback('请输入密码');
    return;
  }
  if ( value.length > 12 ){
    callback('密码长度不能大于12位');
    return;
  }
  callback();
};

// 定义重置表单函数接口
interface IFormLoginReset {
  (obj:ILogin): void;
}

export const useFormLogin = () => {

  // 定义Ref
  const formLoginRef = ref<any>(null);

  // 定义表单
  const formLogin = ref<ILogin>({
    username:'',
    password:''
  });
  
  // 验证规则
  const rulesLogin = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名在 3 到 20 个字符', trigger: 'blur' }
    ],
    password:[
      { required: true, validator: checkPassword, trigger: 'blur' }
    ],
  }
  
  // 重置表单
  const formLoginReset:IFormLoginReset = (obj:ILogin):void => {
    formLogin.value.username = obj.username;
    formLogin.value.password = obj.password;
  }
  
  return {
    formLoginRef,
    formLogin,
    rulesLogin,
    formLoginReset
  }
}