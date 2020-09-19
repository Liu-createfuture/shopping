<template>
  <div>
    <tab-control :popular="SortTab" />
  </div>
</template>

<script>
import TabControl from "components/content/tabcontrol/TabControl";
export default {
  components: { TabControl },
  data(){
      return{
          SortTab:['时尚',]
      }
  }
};
</script>

<style></style>
