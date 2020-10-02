<template>
  <div class="Buy">
    <!-- 头部 -->
    <nar-bar class="Buy-nar-bar">
      <div slot="left" @click="onClickLeft">
        <img src="~assets/img/navbar/左箭头.svg" alt="" />
      </div>
      <div slot="center">
        <input
          name="values"
          type="text"
          id="values"
          size="15"
          maxlength="20"
          value="请输入用户名"
          style="color:#CCCCCC;"
        />
      </div>
      <div slot="right"></div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: {
    NarBar,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    a(value) {
      function addListener(element, e, fn) {
        if (element.addEventListener) {
          element.addEventListener(e, fn, false);
        } else {
          element.attachEvent("on" + e, fn);
        }
      }

      var values = document.getElementById("values");
      addListener(values, "click", function() {
        values.value = "";
      });

      addListener(values, "blur", function() {
        if (values.value == "") {
          values.value = "请输入用户名";
        }
      });
    },
  },
};
</script>

<style scoped>
.Buy-nar-bar > div img {
  height: 40px;
  margin-top: 5px;
}
input {
  width: 100%;
  height: 30px;
  border: 1px solid #dbdbdb;
  font-size: 15px;
  text-indent: 10px;
  color: #cabfbfef;
  border-radius: 50px;
}
input:focus {
  border: 1px solid #03a9f4;
  transition: 1s;
}
</style>
