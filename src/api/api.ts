import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
import qs from 'qs'
import { showMessage } from "./status";
import { ElMessage } from 'element-plus'
import { IResponse, ILogin } from './type';

let axiosInstance:AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // + "/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  transformRequest: [
    function(data) {
      //由于使用的 form-data传数据所以要格式化
      delete data.Authorization;
      data = qs.stringify(data);
      return data;
    }
  ]
});

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.headers.authorization) {
      localStorage.setItem('app_token', response.headers.authorization);
    } else {
      if (response.data && response.data.token) {
        localStorage.setItem('app_token', response.data.token);
      }
    }

    if (response.status === 200) {
      return response;
    } else {
      showMessage(response.status);
      return response;
    }
  },
  // 请求失败
  (error: any) => {
    const {response} = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);
      return Promise.reject(response.data);
    } else {
      ElMessage.warning('网络连接异常,请稍后再试!');
    }
  }
);

let sourceAjaxList: Canceler[] = [];

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {

    console.log(config);

    // const { user } = store.state
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    // 设置 cancel token  用于取消请求 (当一个接口出现401后，取消后续多有发起的请求，避免出现好几个错误提示)
    config.cancelToken = new axios.CancelToken(function executor(cancel: Canceler): void {
      sourceAjaxList.push(cancel)
    })

    // 存在 sessionId 为所有请求加上 sessionId
    // if (localStorage.getItem(`h5_sessionId`) && config.url!.indexOf('/user/login') < 0) {
    //   config.url += ('sessionId=' + localStorage.getItem(`h5_sessionId`));
    // }
    // if (!config.data){
    //   config.data = {}
    // }
    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
) 

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const login = (params: ILogin): Promise<IResponse> => {
  return axiosInstance.post('user/login',params).then(res => res.data);
};