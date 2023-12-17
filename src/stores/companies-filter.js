import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCompaniesFilterStore = defineStore('companies-filter', () => {
  const filters = reactive({
    name: '',
    parent: ''
  })

  const companiesFilter = (rows, terms) => {
    console.log(filters)
    return rows.filter((row) => {
      const nameMatch = row.name?.toLowerCase().includes(filters.name?.toLowerCase().trim())
      const parentMatch =
        !filters.parent?.trim() || row.parent?.toLowerCase() === filters.parent?.toLowerCase()
      return nameMatch && parentMatch
    })
  }

  const changeName = (val) => {
    console.log(val)
    filters.name = val
  }

  const changeParent = (val) => {
    filters.parent = val
  }

  return { companiesFilter, filters, changeName, changeParent }
})
