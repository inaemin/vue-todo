<template>
  <div id="todoForm">
    <form @submit.prevent="onSubmit">
      <h2>할 일 등록</h2>
      <div class="title">할 일 내용</div>
      <input @input="onInput" />
      <div class="title">{{ priorityData[priority] }}</div>
      <div class="priority">
        <PriorityButton
          v-for="el in ['p1', 'p2', 'p3', 'p4']"
          :key="el"
          :priority="priority"
          :data="el"
          @click="onClickPriority(el)"
        />
      </div>
      <div class="button-container">
        <div v-if="mode === 'create'">
          <input
            value="계속 추가"
            type="submit"
            class="update"
            @click.prevent="onContinueSubmit"
          />
          <input
            value="추가"
            type="submit"
            class="update"
            @click.prevent="onSubmit"
          />
          <input value="취소" type="submit" @click.prevent="onFormClose" />
        </div>
        <div v-else>
          <input
            value="삭제"
            type="submit"
            class="delete"
            @click.prevent="onTodoDelete"
          />
          <input value="수정" type="submit" class="update" />
          <input value="취소" type="submit" @click.prevent="onFormClose" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PriorityButton from "./PriorityButton.vue";

const emit = defineEmits(["formClose"]);

const priorityData = ref({
  p1: "중요함-긴급함",
  p2: "중요함-긴급하지않음",
  p3: "중요하지않음-긴급함",
  p4: "중요하지않음-긴급하지않음",
});

const mode = ref("create");

const todoData = ref("");
const priority = ref("p1");

const onInput = (e) => {
  todoData.value = e.target.value;
};

const onClickPriority = (e) => {
  priority.value = e;
};

const onSubmit = (e) => {
  console.log(todoData.value);
  console.log(priority.value);
};

const onContinueSubmit = (e) => {};

const onFormClose = (e) => {
  emit("formClose");
};

const onTodoDelete = (e) => {
  console.log(e.target.value);
};

const onTodoModify = (e) => {};
</script>

<style scoped>
#todoForm {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 329px;
    height: 318px;
    background-color: white;
    border-radius: 10px;
    padding: 16px;
    h2 {
      font-weight: bold;
      margin-bottom: 25px;
    }
    .title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    input:not([type="submit"]) {
      border: none;
      background-color: var(--background-color);
      width: calc(100% - 16px);
      height: 28px;
      margin-bottom: 25px;
      border-radius: 4px;
      padding: 4px 8px;
    }
    .priority {
      background-color: var(--background-color);
      width: calc(100% - 16px);
      height: 60px;
      border-radius: 4px;
      padding: 4px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 80px;
    }
    input[type="submit"] {
      border: none;
      background-color: white;
      font-size: 14px;
      font-weight: bold;
      padding: 8px;
      border-radius: 4px;
      &:hover {
        filter: brightness(95%);
        cursor: pointer;
      }
    }
    .update {
      color: var(--blue);
    }
    .delete {
      color: var(--red);
    }
    .button-container {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
