import {
    debouce
} from "./utils"

import BackTop from "components/common/backTop/BackTop";

export const mixin = {
    data() {
        return {
            imgSending: null
        }
    },
    mounted() {
        //赋值一个函数
        const refresh = debouce(this.$refs.scroll.refresh, 50)

        this.imgSending = () => {
            refresh()
        }
        //接收goodsListItem组件发出事件
        this.$bus.$on('imgSending', this.imgSending)

    }
}


export const arrow = {
    components: {
        BackTop
    },
    data() {
        return {
            //判断箭头显示还是隐藏
            arrows: false,
            //标签栏到顶部高度
            arrowHeight: 0,
            //初始切换时的位置
            saveY: 0,
        }
    },
    methods: {
        contentScroll(position) {
            //scroll滚动的距离>标签栏到顶部高度时,arrows显示
            this.arrows = -position.y > this.arrowHeight 
        },
        backClick() {
            //点击箭头滚动顶部
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
    },
    activated() {
        this.$refs.scroll.refresh();
        //处于活跃时候的位置
        this.$refs.scroll.scrollTo(0, this.saveY);
    },
    deactivated() {
        //记录切换时的Y轴位置
        this.saveY = this.$refs.scroll.getScrollY();
    },
}