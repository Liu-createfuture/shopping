import axios from "axios"
import {
    Toast
} from "vant";
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000",
        timeout: 5000
    })

    //1.请求拦截,interceptors(拦截).request(请求).use(使用)
    instance.interceptors.request.use(
        //成功的
        res => {
            Toast.loading({
                message: "加载中...",
                forbidClick: true,
            });
            //放行请求。拦截下来需要return出去，要不然拿不到数据
            return res
        },
        //失败的
        err => err
    )
    //2.响应拦截 response(响应)
    instance.interceptors.response.use(
        //成功的
        res => {
            //拦截下来需要return出去，要不然拿不到数据
            return res.data;
        },
        //失败的
        err => err
    );

    //发送真正的网络请求
    return instance(config)
}