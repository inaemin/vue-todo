<template>
  <div id="dashboard-container">
    <div>
      <div>
        <span>
          <font-awesome-icon :icon="['fas', 'rocket']" />{{
            p1NotCompleteCount
          }}</span
        >
        <span>
          <font-awesome-icon :icon="['fas', 'fire']" />{{
            p2NotCompleteCount
          }}</span
        ><span>
          <font-awesome-icon :icon="['fas', 'sitemap']" />{{
            p3NotCompleteCount
          }}</span
        ><span>
          <font-awesome-icon :icon="['fas', 'folder-minus']" />{{
            p4NotCompleteCount
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Todo {
  id: number;
  todo: string;
  priority: PriorityType;
  isCompleted: boolean;
}

type PriorityType = "p1" | "p2" | "p3" | "p4";

const props = defineProps<{
  todoListData: Todo[];
}>();

const p1NotCompleteCount = computed(
  () =>
    props.todoListData?.filter((el) => el.priority === "p1" && !el.isCompleted)
      ?.length ?? 0
);

const p2NotCompleteCount = computed(
  () =>
    props.todoListData?.filter((el) => el.priority === "p2" && !el.isCompleted)
      ?.length ?? 0
);

const p3NotCompleteCount = computed(
  () =>
    props.todoListData?.filter((el) => el.priority === "p3" && !el.isCompleted)
      ?.length ?? 0
);

const p4NotCompleteCount = computed(
  () =>
    props.todoListData?.filter((el) => el.priority === "p4" && !el.isCompleted)
      ?.length ?? 0
);
</script>

<style scoped>
#dashboard-container {
  padding: 16px;
  > div {
    background-color: var(--background-color);
    border-radius: 4px;
    padding: 12px 16px;
    > div {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 15px;
      svg {
        margin-right: 8px;
      }
    }
  }
}
</style>
