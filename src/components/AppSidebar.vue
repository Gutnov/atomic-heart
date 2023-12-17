<template>
  <aside class="app-sidebar">
    <q-list class="app-sidebar__list">
      <q-item clickable v-ripple :active="store.filters.tag === ''" @click="store.changeTag('')">
        <q-item-section>Все</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        :active="store.filters.tag === 'research_design_works'"
        @click="store.changeTag('research_design_works')"
      >
        <q-item-section>Научно-исследовательские проектные работы строительство</q-item-section>
      </q-item>
      <q-expansion-item
        default-opened
        :content-inset-level="1"
        expand-icon-toggle
        @click="clickHandler"
      >
        <template #header>
          <q-item
            clickable
            v-ripple
            @click="store.changeTag('construction')"
            :active="store.filters.tag === 'construction'"
            style="width: 100% padding: 0;"
          >
            <q-item-section>Строительство</q-item-section>
          </q-item>
        </template>
        <q-item
          clickable
          v-ripple
          @click="store.changeTag('chemical_production')"
          :active="store.filters.tag === 'chemical_production'"
          style="width: 100% padding: 0;"
        >
          <q-item-section>Химическое производсво</q-item-section>
        </q-item>
        <q-expansion-item :content-inset-level="1" expand-icon-toggle>
          <template #header>
            <q-item
              clickable
              v-ripple
              @click="store.changeTag('nuclear_power')"
              :active="store.filters.tag === 'nuclear_power'"
              style="width: 100% padding: 0;"
            >
              <q-item-section>Атомная энергия</q-item-section>
            </q-item>
          </template>
          <q-item
            clickable
            v-ripple
            @click="store.changeTag('materials_supplies')"
            :active="store.filters.tag === 'materials_supplies'"
            style="width: 100% padding: 0;"
          >
            <q-item-section>Материалы поставки</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click="store.changeTag('equipment_supply_installation')"
            :active="store.filters.tag === 'equipment_supply_installation'"
            style="width: 100% padding: 0;"
          >
            <q-item-section>Оборудование поставка установка</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            @click="store.changeTag('electronics_supply_installation')"
            :active="store.filters.tag === 'electronics_supply_installation'"
            style="width: 100% padding: 0;"
          >
            <q-item-section>Электроника поставка установка</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useContractsFilterStore } from '@/stores/contracts-filter'
const store = useContractsFilterStore()
const clickHandler = () => {
  console.log(111)
}
</script>

<style lang="scss">
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
  // height: calc(100vh - 65.5px);
  position: relative;
  // .q-item {
  //   padding-left: 0;
  //   padding-right: 0;
  //   width: 100%;
  // }
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

.app-sidebar__list {
  position: sticky;
  top: 20px;
  left: 0;
}

@media (max-width: 900px) {
  .app-sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
