import axios from 'axios';
//import { Loading } from 'element-ui';

// 定义接口基础url
const base_url = 'https://localhost:8443';

// axios 配置
axios.defaults.timeout = 5000;




//http request 拦截器
axios.interceptors.request.use(
  config => {
    //token验证
    if (sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = sessionStorage.getItem('Authorization');
    }
    //startLoading()
    config.data = JSON.stringify(config.data);
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // 拼接url  
    config.url = base_url + config.url;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    //endLoading()
    let status = response.data.status;
    if (!status == 'SUCCESS') {
      this.router.push({
        path: "/404",
        querry: { redirect: this.router.currentRoute.fullPath } //从哪个页面跳转
      })
    }
    return response;
  },
  err => {
    return Promise.reject(err)
  }
)


//get function
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


//post function
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}


//patch function
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}


//put function
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}


//delete function
export function del (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
