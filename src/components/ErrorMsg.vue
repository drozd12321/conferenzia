<template>
  <div class="error">{{ errormsg }}</div>
</template>
<script setup>
const props = defineProps({
  errormsg: String,
});
</script>
<style scoped>
.error {
  margin-top: 10px;
  padding: 7px;
  border-radius: 5px;
  border: 2px solid red;
  font-size: 18px;
}
</style>
