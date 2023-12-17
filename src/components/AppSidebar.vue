<template>
  <aside class="app-sidebar">
    <q-list>
      <q-item clickable v-ripple active>
        <q-item-section>Научно-исследовательские проектные работы строительство</q-item-section>
      </q-item>
      <q-expansion-item label="Строительство" default-opened :content-inset-level="1" active>
        <q-expansion-item :content-inset-level="1" label="Химическое производсво">
        </q-expansion-item>
        <q-expansion-item expand-separator label="атомная энергия" content-inset-level="1">
          <q-expansion-item expand-separator label="материалы поставки"> </q-expansion-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.app-sidebar {
  padding-right: 14px;
  background-color: #fff;
  width: 287px;
  min-width: 320px;
  border: 1px solid #ecedf6;
  border-left: 0;
  border-bottom: none;
  padding-top: 20px;
  padding-left: 20px;
  height: calc(100vh - 65.5px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 100%;
    background-color: #fff;
    left: -300%;
    top: 0;
  }
}

.app-sidebar__title {
  margin-bottom: 16px;
}

@media (max-width: 900px) {
  .app-sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
