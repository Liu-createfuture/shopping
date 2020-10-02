import {
    request
} from './request'

export function getHomeMutidata() {
    return request({
        //首页轮播图,推荐等数据
        url: "/api/z8/home/multidata"
    })
}

export function getHomeGoodsList(type, page) {
    return request({
        //标签页数据[流行，新款，精选]
        url: '/api/w6/home/data',
        params: {
            type, //标签页数据
            page //页数
        }
    })
}