<template>
  <div id="todoList">
    <div></div>
    <div class="category">긴급함</div>
    <div class="category">긴급하지않음</div>
    <div class="category">
      <span class="vertical">중요함</span>
    </div>
    <TodoBox
      :todoData="p1Data"
      @todo-complete="handleTodoComplete"
      @todo-modify-or-delete="handleTodoModifyOrDelete"
    />
    <TodoBox
      :todoData="p2Data"
      @todo-complete="handleTodoComplete"
      @todo-modify-or-delete="handleTodoModifyOrDelete"
    />
    <div class="category">
      <span class="vertical">중요하지않음</span>
    </div>
    <TodoBox
      :todoData="p3Data"
      @todo-complete="handleTodoComplete"
      @todo-modify-or-delete="handleTodoModifyOrDelete"
    />
    <TodoBox
      :todoData="p4Data"
      @todo-complete="handleTodoComplete"
      @todo-modify-or-delete="handleTodoModifyOrDelete"
    />
  </div>
</template>

<script setup lang="ts">
import TodoBox from "./TodoBox.vue";
import { computed } from "vue";

const props = defineProps({
  todoListData: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["todoComplete", "todoModifyOrDelete"]);

const p1Data = computed(() =>
  props.todoListData.filter((el) => el.priority === "p1")
);
const p2Data = computed(() =>
  props.todoListData.filter((el) => el.priority === "p2")
);
const p3Data = computed(() =>
  props.todoListData.filter((el) => el.priority === "p3")
);
const p4Data = computed(() =>
  props.todoListData.filter((el) => el.priority === "p4")
);

const handleTodoComplete = (todo) => {
  emit("todoComplete", todo);
};

const handleTodoModifyOrDelete = (todo) => {
  emit("todoModifyOrDelete", todo);
};
</script>
<style>
#todoList {
  display: grid;
  height: 613px;
  grid-template-columns: 20px 1fr 1fr;
  grid-template-rows: 20px 1fr 1fr;
  padding: 0px 32px 16px 16px;
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
