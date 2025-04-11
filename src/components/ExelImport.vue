<template>
  <div>
    <input type="file" @change="emitFile" accept=".xlsx, .xls" class="inp" />
  </div>
</template>
<script setup>
const emit = defineEmits(["handleFileUpload"]);
const emitFile = async (event) => {
  try {
    const file = event.target.files[0];
    if (!file) return;
    emit("handleFileUpload", file);
  } finally {
  }
};
</script>
<style scoped>
input {
  color: var(-head-color);
  padding: 7px;
  border-radius: 17px;
  font-size: 20px;
  background-color: var(--act);
}
</style>
