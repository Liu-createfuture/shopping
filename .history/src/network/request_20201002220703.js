import axios from "axios"

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000",
        timeout: 5000
    })

    //1.请求拦截,interceptors(拦截).use(使用)
    instance.interceptors.request.use(
        url => {
           axios.interceptors.
            //拦截下来需要return出去，要不然拿不到数据
            return url
        },
        err => err
    )
    //2.响应拦截
    instance.interceptors.response.use(
        res => {
            //拦截下来需要return出去，要不然拿不到数据
            return res.data;
        },
        err => err
    );

    //发送真正的网络请求
    return instance(config)
}