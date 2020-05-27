import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config

}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 根据状态码跳转
  return response;
}, error => {
 break;
  return Promise.reject(error);
});


// post
export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      // 添加公共的请求头
      data: JSON.stringify(data),
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}

// get
export function get (url, data = '') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      // 添加公共的请求头
      params: '',
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}