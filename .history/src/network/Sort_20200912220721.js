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
export function SortItem(maitKey) {
    return request({
        url: '/api/z8/subcategory',
        params: {
            maitKey
        }
    })
}

//标签分类图片
export function SortTabItem() { 
    return request()
}