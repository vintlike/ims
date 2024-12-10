import axios from 'axios';

//1. 创建新的axios实例，
const instance = axios.create({
  // 默认30000, 超时时间，单位 ms，这里设置了10s的超时时间
  timeout: 10 * 1000,
  // 是否跨站点访问控制请求
  withCredentials: true,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: (data) => {
    // 对 data 进行任意转换处理
    data = JSON.stringify(data);
    return data;
  },
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse(data) {
    // 对 data 进行任意转换处理
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data);
    }
    return data;
  },
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  }
});

export const CancelToken = axios.CancelToken;

// 2.请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      config.params = Object.assign({}, config.params, { token });
      //如果要求携带在请求头中
      config.headers!.token = token;
      config.headers!.Authorization = token;
    }
    config.headers!['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers!['X-Request-With'] = 'XMLHttpRequest';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3.响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//4.导入文件
export default instance;
