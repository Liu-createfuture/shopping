<template>
  <div>
  
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl";
export default {
  components: { TabControl },
  data() {
    return {
      SortTab: ["时尚", "流行", "新款"],
    };
  },
  methods: {
    a(index) {
      console.log(index);
    },
  },
};
</script>

<style></style>
