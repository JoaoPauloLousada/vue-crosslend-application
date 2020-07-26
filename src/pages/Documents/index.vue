<template>
  <div class="row">
    <div class="col">
      <h1 class="title font-weight-bold">Documents</h1>
      <div class="row">
        <div class="col-3">
          <DocumentsFilter />
        </div>
        <div class="col-9 documents-table">
          <DocumentsTable :documentsList="documentsList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DocumentsTable from '@/components/DocumentsTable'
import DocumentsFilter from '@/components/DocumentsFilter'

export default {
  components: {
    DocumentsTable,
    DocumentsFilter
  },
  created () {
    if (this.documentsList.length <= 0) {
      this.setIsLoading(true)
      this.getDocuments()
    }
    if (!this.user.data) {
      this.getUserData()
    }
  },
  watch: {
    documentsList: function (val) {
      this.setIsLoading(false)
    }
  },
  computed: {
    ...mapState({
      documentsList: state => state.documents.list,
      user: state => state.user.data
    })
  },
  methods: {
    ...mapActions({
      getDocuments: 'getDocuments',
      setIsLoading: 'setIsLoading',
      getUserData: 'getUserData'
    })
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin: 1.875rem 0;
    font-size: 1.25rem;
  }
  .documents-table {
    @include media-breakpoint-down(sm) {
      max-width: 90%;
      margin-left: 10%;
    }
  }
</style>
