import Cookies from 'js-cookie';
/**
 * 获取token
 */
export const getFiAccessToken = () => {
  if (Cookies.get("sonic_token")) return Cookies.get("sonic_token");
}