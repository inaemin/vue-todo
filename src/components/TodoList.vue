<template>
  <div id="todoList">
    <div></div>
    <div class="category">긴급함</div>
    <div class="category">긴급하지않음</div>
    <div class="category">
      <span class="vertical">중요함</span>
    </div>
    <TodoBox />
    <TodoBox />
    <div class="category">
      <span class="vertical">중요하지않음</span>
    </div>
    <TodoBox />
    <TodoBox />
  </div>
</template>

<script setup lang="ts">
import TodoBox from "./TodoBox.vue";
</script>
<style>
#todoList {
  display: grid;
  height: 613px;
  grid-template-columns: 20px 1fr 1fr;
  grid-template-rows: 20px 1fr 1fr;
  padding: 0px 32px 16px 16px;
  /* gap: 16x; */
}

.category {
  font-weight: bold;
  text-align: center;
  position: relative;
}

.vertical {
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: fit-content;
  white-space: nowrap;
  text-align: center;
}
</style>
