<template>
  <div>{{ SortItems }}</div>
</template>

<script>
export default {
  props: {
    SortItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
