<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr class="d-flex">
          <th class="text-gray-600 w-50" scope="col" @click="$emit('name-clicked')">Document Name</th>
          <th class="text-gray-600 w-50 text-center" scope="col" @click="$emit('date-clicked')">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in slicedList" :key="index" class="d-flex">
          <td class="text-gray-600 font-weight-bold" >{{item.name}}</td>
          <td class="text-gray-600 font-weight-bold text-center">{{item.date | formattedDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
.table {
  table-layout: fixed;
  font-size: .875rem;
}
  th {
    cursor: pointer
  }
  tbody tr {
    background-color: white
  }
  tbody td {
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
