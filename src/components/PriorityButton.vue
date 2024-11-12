<template>
  <div class="priorityButton" :class="{ active: priority === data }">
    <component :is="icons[data]" />
  </div>
</template>

<script setup lang="ts">
import P1Icon from "@/assets/images/p1.svg";
import P2Icon from "@/assets/images/p2.svg";
import P3Icon from "@/assets/images/p3.svg";
import P4Icon from "@/assets/images/p4.svg";

const props = defineProps({
  priority: String,
  data: String,
});

const icons = {
  p1: P1Icon,
  p2: P2Icon,
  p3: P3Icon,
  p4: P4Icon,
};
</script>

<style scoped>
.priorityButton {
  width: 70px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
}

.active {
  background-color: white;
}
</style>
