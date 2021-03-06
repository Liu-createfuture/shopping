import {
    request
} from './request'



//请求detail数据
export function getDetail(iid) {
    return request({
        url: 'api/w6/detail',
        params: {
            iid
        }
    })
}


//请求推荐数据
export function getRecommend() {
    return request({
        url: '/api/w6/recommend'
    })
}


//获取商品信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//获取店家信息
export class Shop {
    constructor(shopInfo,iid) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
        this.iid = iid;
        this.follow = false
    }
}

//获取参数信息
export class GoodsParam {
    constructor(info, rule) {
        //images可能没有值(某些商品有值，有些没有值)
        this.image = info.images ? info.images[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}

//获取购物车信息

export class Product {
    constructor(topImages, goods, iid) {
        this.image = topImages[0];
        this.title = goods.title;
        this.desc = goods.desc;
        this.price = goods.realPrice;
        this.iid = iid;
        this.judge = false 
    }
}