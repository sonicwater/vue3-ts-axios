import { Request } from './request';
 
 
export function login (parameter: any)  {
  return Request.axiosInstance({
    url: '/login',
    method: 'post',
    data: parameter
  })
}