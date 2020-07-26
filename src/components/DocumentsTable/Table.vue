<template>
  <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" @click="$emit('name-clicked')">Document Name</th>
          <th scope="col" @click="$emit('date-clicked')">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in slicedList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.date | formattedDate}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { formatDate } from '@/services/helpers/date'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    currentPage: {
      type: Number,
      default: 0
    },
    itemsPerPage: {
      type: Number,
      default: 6
    }
  },
  computed: {
    slicedList: function () {
      const initialIndex = (this.currentPage - 1) * this.itemsPerPage
      const finalIndex = initialIndex + this.itemsPerPage
      return this.list.slice(initialIndex, finalIndex)
    }
  },
  filters: {
    formattedDate: function (str) {
      return formatDate(new Date(str))
    }
  }
}
</script>

<style lang="scss" scoped>
  th {
    cursor: pointer
  }
</style>
