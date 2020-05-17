// 拦截器
import axios from 'axios'
// const BASEUrl = process.env.NODE_ENV === 'production' ? '' : '';
// const service = axios.create({
//     baseUrl: "http://localhost:3000",
//     timeout: 1000,
// })
import { Message } from 'element-ui';
const service = axios.create()

service.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

service.interceptors.response.use(function(response) {
    let data = response.data
    if (data.status !== '0') {
        Message.error(data.msg);
        return Promise.reject(data)
    } else {
        return response;
    }
}, function(error) {
    return Promise.reject(error);
});

export default service;