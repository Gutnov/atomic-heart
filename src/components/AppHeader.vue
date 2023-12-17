<template>
  <div class="app-header">
    <div class="container">
      <div class="app-header__wr">
        <h1 class="app-header__title">Атомик хак</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getFormatedTime } from '../helpers'

const refeshedTime = ref(new Date())
</script>

<style lang="scss">
.app-header {
  box-shadow: 0px 1px 4px 0px #6f87ee26;
  background-color: #fff;
}
.app-header__wr {
  display: flex;
  align-items: center;
  padding: 16px 20px;
}

.app-header__devider {
  width: 1px;
  height: 30px;
  background-color: #daddef;
  margin: 0 17px;
}
.app-header__refreshed-string {
  font-size: 12px;
  color: #75808a;
}
</style>
