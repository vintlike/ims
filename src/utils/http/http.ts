import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Message from '@/components/antds/Message';
import instance from './instance';
export type IRequestMethod = 'get' | 'post';

const errorCodeMap: GObject = {
  forbidden: '无权限',
  400: '请求错误(400)',
  401: '未授权，请重新登录',
  // 跳转登录页面
  // 登录过期，请重新登录
  // 清除token，用户信息
  // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
  403: '拒绝访问(403)',
  404: '请求错误,未找到该资源(404)',
  405: '请求方法未允许(405)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)',
  505: 'HTTP版本不受支持(505)'
};

const showMsg = (response: Res) => {
  let { status, msg = '' } = response;

  if (status) {
    msg = errorCodeMap[`${status}`] || `连接错误，请检查网络或联系管理员！`;
  }

  return msg;
};

export const http = {
  request(config: AxiosRequestConfig) {
    return instance
      .request(config)
      .then(
        (response) => {
          if (response.data.status !== 0) {
            const msg = showMsg(response);
            Message.error(msg);
          }

          return response
            ? Promise.resolve(response.data)
            : Promise.reject(new Error('no response'));
        },
        (error) => {
          return Promise.reject(error);
        }
      )
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        }

        return Promise.reject(error);
      });
  },
  get(url: string, params?: GObject, config?: AxiosRequestConfig) {
    return this.request({ ...config, url, method: 'get', params });
  },
  post(url: string, data?: GObject, config?: AxiosRequestConfig) {
    return this.request({ ...config, url, method: 'post', data });
  }
};
