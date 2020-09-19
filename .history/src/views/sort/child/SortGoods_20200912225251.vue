<template>
   <div class="class-ify-info" >
    <div class="info-item" v-for="(item,index) in  SortItemList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="scroll" />
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
