<template>
  <div id="phone-container">
    <Header @form-open="handleFormOpen" />
    <DashBoard :todoListData="todoListData" />
    <TodoList
      :todoListData="todoListData"
      @todo-complete="handleTodoComplete"
      @todo-modify-or-delete="handleTodoModifyOrDelete"
    />
    <TodoForm
      v-if="mode !== `read`"
      @form-close="handleFormClose"
      @create-todo="handleCreateTodo"
      @modify-todo="handleModifyTodo"
      @delete-todo="handleDeleteTodo"
      :mode="mode"
      :todoData="selectedTodo"
    />
    <div id="bottombar" />
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import DashBoard from "./DashBoard.vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";
import { ref, onMounted, watch } from "vue";

const mode = ref("read"); // 'read', 'create', 'modify'
const todoListData = ref([]);
const selectedTodo = ref(null);
const LOCAL_STORAGE_KEY = "todos";

// 로컬 스토리지에서 초기 데이터 로드
onMounted(() => {
  const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedTodos) {
    todoListData.value = JSON.parse(savedTodos);
  }
});

// todoListData가 변경될 때마다 로컬 스토리지 업데이트
watch(
  todoListData,
  (newTodos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  },
  { deep: true }
); // 깊은 감시를 위해 deep: true 설정

const handleFormClose = () => {
  mode.value = "read";
  selectedTodo.value = null;
};

const handleFormOpen = () => {
  mode.value = "create";
};

const handleCreateTodo = (newTodo) => {
  /**
   * todo의 데이터 구조는
   * {id: Date.now(), todo: todoData, priority: "p1", isCompleted: true}
   */
  todoListData.value.push(newTodo);
};

const handleTodoComplete = (todo) => {
  todoListData.value = todoListData.value.map((el) =>
    el.id === todo.id ? { ...el, isCompleted: !el.isCompleted } : el
  );
};

const handleTodoModifyOrDelete = (todo) => {
  mode.value = "modify";
  selectedTodo.value = todo;
};

const handleModifyTodo = (todo) => {
  todoListData.value = todoListData.value.map((el) => {
    if (el.id === todo.id) {
      el.todo = todo.todo;
      el.priority = todo.priority;
      el.isCompleted = todo.isCompleted;
    }
    return el;
  });
  handleFormClose();
};

const handleDeleteTodo = (deleteId) => {
  todoListData.value = todoListData.value.filter((el) => el.id !== deleteId);
  handleFormClose();
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
