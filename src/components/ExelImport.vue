<template>
  <div class="file-upload">
    <label class="file-upload__label">
      <input
        type="file"
        @change="emitFile"
        accept=".xlsx, .xls"
        class="file-upload__input"
      />
      <span class="file-upload__button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM13 9L16 12H13V16H11V12H8L11 9H13Z"
            fill="currentColor"
          />
        </svg>
        Выберите файл Excel
      </span>
      <h4 class="file-upload__filename" v-if="fileName">
        {{ fileName }}
      </h4>
    </label>
  </div>
</template>
<script setup>
import { ref } from "vue";

const emit = defineEmits(["handleFileUpload"]);
const fileName = ref("");
const emitFile = async (event) => {
  try {
    const file = event.target.files[0];
    if (!file) return;
    emit("handleFileUpload", file);
    fileName.value = file.name;
  } finally {
  }
};
</script>
<style scoped>
.file-upload {
  margin: 1rem 0;
}

.file-upload__label {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.file-upload__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.file-upload__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--act);
  color: white;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.file-upload__button:hover {
  background-color: var(--act-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.file-upload__button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.file-upload__filename {
  color: var(--text-color);
  font-size: 0.9rem;
  opacity: 0.8;
}
label {
  border: 2px solid var(--content-color);
  border-radius: 5px;
  padding: 5px;
  width: 500px;
}
</style>
