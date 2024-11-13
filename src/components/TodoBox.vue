<template>
  <div id="todoBox">
    <ul>
      <template v-for="todo in todoData" :key="todo.id">
        <li :class="todo.isCompleted ? `completed` : null">
          <input
            type="checkbox"
            @click="onClickComplete(todo)"
            :checked="todo.isCompleted"
          />
          <p @click="onTodoModifyOrDelete(todo)">
            {{ todo.todo }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  todoData: Object,
});

const emit = defineEmits(["todoComplete", "todoModifyOrDelete"]);

const onClickComplete = (todo) => {
  emit("todoComplete", todo);
};

const onTodoModifyOrDelete = (todo) => {
  emit("todoModifyOrDelete", todo);
};
</script>

<style scoped>
#todoBox {
  background-color: var(--background-color);
  margin: 4px;
  padding: 16px 8px;
  border-radius: 8px;
  ul {
    li {
      display: flex;
      align-items: center;
      word-break: break-word;
      input {
        margin-right: 8px;
        width: 20px;
        height: 20px;
        accent-color: var(--background-color);
      }
    }
    .completed {
      text-decoration: line-through;
      color: #888; /* 텍스트 색상도 흐리게 만들 수 있습니다 */
    }
  }
}
</style>
