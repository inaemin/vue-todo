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
interface Todo {
  id: number;
  todo: string;
  priority: PriorityType;
  isCompleted: boolean;
}

type PriorityType = "p1" | "p2" | "p3" | "p4";

defineProps<{
  todoData: Todo[];
}>();

const emit = defineEmits<{
  (e: "todoComplete", todo: Todo): void;
  (e: "todoModifyOrDelete", todo: Todo): void;
}>();

const onClickComplete = (todo: Todo) => {
  emit("todoComplete", todo);
};

const onTodoModifyOrDelete = (todo: Todo) => {
  emit("todoModifyOrDelete", todo);
};
</script>

<style scoped>
#todoBox {
  background-color: var(--background-color);
  margin: 4px;
  padding: 16px 8px;
  border-radius: 8px;
  overflow-y: auto;
  /* 스크롤바 스타일링 (webkit 기반 브라우저) */
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      word-break: break-word;
      margin-bottom: 8px;
      input {
        margin-right: 8px;
        width: 20px;
        height: 20px;
        accent-color: var(--background-color);
      }
      p {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .completed {
      text-decoration: line-through;
      color: #888; /* 텍스트 색상도 흐리게 만들 수 있습니다 */
    }
  }
}
</style>
