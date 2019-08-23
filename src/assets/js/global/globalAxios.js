import axios from 'axios'
import qs from 'qs'
import { Message, Modal } from 'iview';
import router from "../../../router/index";
import constant from './globalConstant';
axios.defaults.timeout = constant.timeout;
axios.defaults.baseURL = constant.baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
    if(config.method == "get"){
        config.paramsSerializer = () => {
            return qs.stringify(config.params, { 
                indices: false,
                skipNulls: true 
            });
        }
    }
    if(config.method == "post"){
        if(config.headers['Content-Type'] == "application/x-www-form-urlencoded"){
            config.data = qs.stringify(config.data);
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
})

axios.interceptors.response.use(res => {
    
    return res.data.entities; 
}, error => {
    Message.error("网络错误");
    return Promise.reject(error);
})

export default axios