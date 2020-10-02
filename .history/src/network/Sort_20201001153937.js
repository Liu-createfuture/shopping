import {
    request
} from "./request";


//分类数据
export function SortClass() {
    return request({
        url: 'api/w6/category',
    })
}

//分类商品
export function SortItem(maitKey) {
    return request({
        url: '/api/w6/subcategory',
        params: {
            maitKey
        }
    })
}

//标签分类图片
export function SortTabItem(miniWallkey, type) {
    return request({
        url: '/api/w6/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}