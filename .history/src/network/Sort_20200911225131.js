import {
    request
} from "./request";


//分类数据
export function SortClass() {
    return request({
        url: 'api/z8/category',
    })
}