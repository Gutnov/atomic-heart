import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useContractsFilterStore = defineStore('contracts-filter', () => {
  const filters = reactive({
    tag: ''
  })

  const rowsProp = ref(null)

  const filter = (rows, terms) => {
    if (!rowsProp.value) {
      rowsProp.value = rows
    }
    const filteredRows = rows.filter((row) => {
      const tagMatch = !filters.tag || row[`tag_${filters.tag}`] > 0
      return tagMatch
    })
    rowsProp.value = filteredRows
    return filteredRows
  }

  const changeTag = (val) => {
    console.log(val)
    filters.tag = val
  }

  return { filter, filters, changeTag, rowsProp }
})
