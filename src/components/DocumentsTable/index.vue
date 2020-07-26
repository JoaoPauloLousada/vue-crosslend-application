<template>
  <div class="w-100 table-wrapper rounded p-3">
    <Table
      :list="filteredList"
      :currentPage="paginator.currentPage"
      :itemsPerPage="paginator.itemsPerPage"
      @name-clicked="sortByName"
      @date-clicked="sortByDate" />
    <Paginator
      :currentPage="paginator.currentPage"
      :totalOfPages="paginator.total"
      :handleFunctions="paginationHandleFunctions"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Table from './Table'
import Paginator from './Paginator'

export default {
  components: {
    Table,
    Paginator
  },
  props: {
    documentsList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      paginationHandleFunctions: {
        documentsfirstPage: this.documentsfirstPage,
        documentsPreviousPage: this.documentsPreviousPage,
        documentsNextPage: this.documentsNextPage,
        documentsLastPage: this.documentsLastPage
      }
    }
  },
  computed: {
    ...mapState({
      paginator: state => state.documents.paginator,
      filteredList: state => state.documents.filteredList
    })
  },
  watch: {
    documentsList: function (list) {
      this.setFilteredList(list)
    },
    filteredList: function (val) {
      this.setTotalOfPages(val.length)
    }
  },
  methods: {
    ...mapActions([
      'documentsfirstPage',
      'documentsPreviousPage',
      'documentsNextPage',
      'documentsLastPage',
      'setTotalOfPages',
      'setFilteredList',
      'sortByName',
      'sortByDate'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .table-wrapper {
    background-color: $bg-secondary;
    @include defaultShadow();
  }
</style>
