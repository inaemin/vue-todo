<template>
  <div id="dashboard-container">
    <div>
      <div>
        <span> <font-awesome-icon :icon="['fas', 'rocket']" />0</span>
        <span> <font-awesome-icon :icon="['fas', 'fire']" />0</span
        ><span> <font-awesome-icon :icon="['fas', 'sitemap']" />0</span
        ><span> <font-awesome-icon :icon="['fas', 'folder-minus']" />0</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
