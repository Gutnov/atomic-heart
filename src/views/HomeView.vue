<template>
  <div class="home-view">
    <div class="container">
      <main class="home-view__main">
        <AppSidebar />
        <div class="home-view__map-wr">
          <q-tabs v-model="tab" class="text-teal" style="margin-bottom: 20px">
            <q-tab name="contracts" label="Контракт" />
            <q-tab name="companies" label="Компании" />
            <q-tab name="business" label="Бизнес процесс" />
          </q-tabs>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="contracts">
              <img class="home-view__diagram" src="../assets/img/BP.png" />
              <ContractsTable />
            </q-tab-panel>
            <q-tab-panel name="companies">
              <img class="home-view__diagram" src="../assets/img/BP.png" />
              <CompaniesTable />
            </q-tab-panel>
            <q-tab-panel name="business">
              <img class="home-view__diagram" src="../assets/img/BP.png" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import CompaniesTable from '@/components/CompaniesTable.vue'
import ContractsTable from '@/components/ContractsTable.vue'
import { ref } from 'vue'
const tab = ref('contracts')
</script>

<style lang="scss" scoped>
.home-view__main {
  display: grid;
  grid-template-columns: auto 1fr;
}
.home-view__diagram {
  max-width: 100%;
}
.home-view__map-wr {
  padding: 20px;
}

#canvas {
  height: 100vh;
}
@media (max-width: 900px) {
  .home-view__main {
    display: block;
  }
}
</style>
