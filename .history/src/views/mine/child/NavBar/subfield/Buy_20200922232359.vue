<template>
  <div class="Buy">
    <!-- 头部 -->
    <div class="Buy-nar-bar">
      <div @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import NarBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    NarBar,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style scoped>
.Buy-nar-bar > div img {
  height: 40px;
  margin-top: 5px;
}
</style>
