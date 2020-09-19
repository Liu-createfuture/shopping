import {
    request
} from "./request";


//分类数据
export function SortClass() {
    return request({
        url: 'api/z8/category',
    })
}

//分类商品
export function SItem(maitKey) {
    return request({
        url: '/api/z8/subcategory',
        params: {
            maitKey
        }
    })
}