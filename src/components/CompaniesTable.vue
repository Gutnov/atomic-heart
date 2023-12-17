<template>
  <div class="companies-table">
    <q-table
      :filter-method="store.companiesFilter"
      title="Компании"
      :filter="store.filters"
      :rows="rows"
      :columns="columns"
      row-key="name"
      virtual-scroll
      style="height: 500px"
      v-model:pagination="pagination"
      class="my-sticky-header-table"
      :rows-per-page-options="[0]"
      v-if="rows.length"
    >
      <template v-slot:top>
        <div class="companies-table__filter">
          <q-input
            bottom-slots
            outlined
            label="Компания"
            @update:model-value="store.changeName($event)"
            :model-value="store.filters.name"
            style="flex: 1; margin-right: 20px"
          >
            <template v-slot:append>
              <q-icon name="close" @click="store.changeName('')" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            bottom-slots
            outlined
            label="Родительская компания"
            @update:model-value="store.changeParent($event)"
            :model-value="store.filters.parent"
            style="flex: 1; margin-right: 20px"
          >
            <template v-slot:append>
              <q-icon name="close" @click="store.changeParent('')" class="cursor-pointer" />
            </template>
          </q-input>
          <q-btn
            color="primary"
            icon-right="archive"
            label="Export to csv"
            no-caps
            @click="exportTable"
            style="max-height: 56px"
          />
        </div>
      </template>
      <template v-slot:body-cell="props">
        <q-td
          :props="props"
          class="companies-table__td"
          @dblclick="doubleclickHandler(props.value, props.row)"
        >
          {{ props.value || '-' }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import companies from '@/resorces/companies.json'
import { useCompaniesFilterStore } from '@/stores/companies-filter'
import { exportFile, useQuasar } from 'quasar'
const $q = useQuasar()

const rows = ref([])
onMounted(() => {
  rows.value = companies
})

const columns = ref([
  {
    name: 'name',
    field: 'name',
    label: 'Компания',
    align: 'left'
  },
  {
    name: 'parent',
    field: 'parent',
    label: 'Родительская компания',
    align: 'left'
  }
])

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val

  formatted = formatted === void 0 || formatted === null ? '' : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

const exportTable = () => {
  // naive encoding to csv format
  const content = [columns.value.map((col) => wrapCsvValue(col.label))]
    .concat(
      rows.value.map((row) =>
        columns.value
          .map((col) =>
            wrapCsvValue(
              typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(',')
      )
    )
    .join('\r\n')

  const status = exportFile('table-export.csv', content, 'text/csv')

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}

const pagination = ref({
  rowsPerPage: 0
})

const store = useCompaniesFilterStore()

const doubleclickHandler = (val, row) => {
  if (val === row.parent) {
    store.filters.parent = val
  }
}
</script>

<style lang="scss">
.my-sticky-header-table {
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */ {
    background-color: #fff;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }
  thead tr:first-child th {
    top: 0;
  }

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th {
    top: 48px;
  }

  /* prevent scrolling behind sticky top row on focus */
  tbody {
    scroll-margin-top: 48px;
  }
}
.companies-table__td {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.companies-table__filter {
  display: flex;
  width: 100%;
}
</style>
