<template>
  <div id="phone-container">
    <Header @form-open="handleFormOpen" />
    <DashBoard />
    <TodoList />
    <TodoForm v-if="mode !== `read`" @form-close="handleFormClose" />
    <div id="bottombar" />
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import DashBoard from "./DashBoard.vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";
import { ref } from "vue";

const mode = ref("read");

const handleFormClose = () => {
  mode.value = "read";
};

const handleFormOpen = () => {
  mode.value = "create";
};
</script>

<style scoped>
#bottombar {
  margin: 0 auto;
  width: 144px;
  height: 3px;
  border-radius: 2px;
  background-color: black;
}
</style>
