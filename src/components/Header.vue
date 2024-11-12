<template>
  <header>
    <div>
      <Logo />
      <h1>matrix</h1>
    </div>
    <button @click="onCreateTodo">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </button>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/logo.svg";
import { defineEmits } from "vue";

const emit = defineEmits(["formOpen"]);

const onCreateTodo = () => {
  emit("formOpen");
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  > div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    font-size: 20px;
    margin-left: 8px;
  }
}
button {
  border: none;
  background-color: var(--background-color);
  padding: 8px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }
}
</style>
