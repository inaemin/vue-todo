<template>
  <div id="phone">
    <header>
      <span>9:56</span>
      <div>
        <font-awesome-icon :icon="['fas', 'signal']" />
        <font-awesome-icon :icon="['fas', 'wifi']" />
        <font-awesome-icon :icon="['fas', 'battery-three-quarters']" />
      </div>
    </header>
    <Container />
  </div>
</template>

<script setup lang="ts">
import Container from "./components/Container.vue";
</script>

<style scoped>
#phone {
  width: 393px;
  height: 852px;
  background-color: white;
  border-radius: 48px;
  box-shadow: 0px 0px 30px 2px #909090;
  position: relative;
}

header {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  svg {
    margin-left: 4px;
  }
}
</style>
