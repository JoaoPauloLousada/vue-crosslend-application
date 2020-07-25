<template>
  <div class="row">
    <div class="col">
      <h1 class="title font-weight-bold">Documents</h1>
      <div class="row">
        <div class="col-9">
          <DocumentsTable :documentsList="documentsList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DocumentsTable from '@/components/DocumentsTable'

export default {
  components: {
    DocumentsTable
  },
  created () {
    if (this.documentsList.length <= 0) this.getDocuments()
  },
  computed: {
    ...mapState({
      documentsList: state => state.documents.list
    })
  },
  methods: {
    ...mapActions({
      getDocuments: 'getDocuments'
    })
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin: 1.875rem 0;
    font-size: 1.25rem;
  }
</style>
