<template>
  <div class="d-flex justify-content-center justify-content-md-end">
    <div class="d-flex align-items-center">
      <button :class="buttonCommonClasses + ' mr-2'" @click="handleFunctions.documentsfirstPage">&lt;&lt;</button>
      <button :class="buttonCommonClasses + ' mr-2'" @click="handleFunctions.documentsPreviousPage">&lt;</button>
      <div class="text-primary font-weight-bold">{{currentPage}} of {{totalOfPages}}</div>
      <button :class="buttonCommonClasses + ' ml-2 mr-2'" @click="handleFunctions.documentsNextPage">&gt;</button>
      <button :class="buttonCommonClasses" @click="handleFunctions.documentsLastPage">&gt;&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: null
    },
    totalOfPages: {
      type: Number,
      default: null
    },
    handleFunctions: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      buttonCommonClasses: 'border-primary btn bg-white rounded-0 text-primary font-weight-bold p-0'
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  .text-primary {
    font-size: .875rem;
  }
  .btn {
    font-size: .875rem;
    width: 1.375rem;
    height: 1.375rem;
  }
}
</style>
