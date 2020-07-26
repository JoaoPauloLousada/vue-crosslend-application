<template>
  <div class="col-3">
    <div class="w-100 filter-wrapper rounded">
      <div class="title d-flex justify-content-between mb-4">
        <p class="font-weight-bold m-0">{{title}}</p>
        <button type="button" class="close d-md-none" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="mb-4">
        <DatePicker v-model="dateFrom" :popover="{ placement: 'bottom', visibility: 'click' }">
          <button class="btn btn-block btn__calendar d-flex align-items-center">
            <span class="mr-2"><CalendarBlank fillColor="#646464" /></span>
            <span class="font-weight-bold calendar__text">{{from}}</span>
            <span class="ml-auto"><ChevronDown fillColor="#2d4596" :size="28" /></span>
          </button>
        </DatePicker>
      </div>
      <div class="mb-4">
        <DatePicker v-model="dateTo" :popover="{ placement: 'bottom', visibility: 'click' }">
          <button class="btn btn-block btn__calendar d-flex align-items-center">
            <span class="mr-2"><CalendarBlank fillColor="#646464" /></span>
            <span class="font-weight-bold calendar__text">{{to}}</span>
            <span class="ml-auto"><ChevronDown fillColor="#2d4596" :size="28" /></span>
          </button>
        </DatePicker>
      </div>

      <Calendar class="d-none"/>

      <div class="d-flex flex-column">
        <button
          type="button"
          class="btn text-light btn-lg mb-4 font-weight-bold btn--apply"
          @click="applyFilter">Apply filters</button>
        <button
          type="button"
          class="btn text-light btn-lg font-weight-bold btn--clear"
          @click="clearFilters">Clear filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import { formatDate, firstDateIsGreater } from '@/services/helpers/date'

export default {
  components: {
    Calendar,
    DatePicker,
    CalendarBlank,
    ChevronDown
  },
  data () {
    return {
      title: 'Filter by',
      dateFrom: null,
      dateTo: null
    }
  },
  computed: {
    from: function () {
      if (this.dateFrom) return formatDate(new Date(this.dateFrom))
      return 'From'
    },
    to: function () {
      if (this.dateTo) return formatDate(new Date(this.dateTo))
      return 'To'
    }
  },
  methods: {
    applyFilter () {
      if (!this.dateFrom) return console.log('dateFrom is not setted')
      if (!this.dateTo) return console.log('dateTo is not setted')
      if (firstDateIsGreater(this.dateFrom, this.dateTo)) return console.log('first date is Greater')
      this.filterByDate({ dateFrom: new Date(this.dateFrom), dateTo: new Date(this.dateTo) })
    },
    clearFilters () {
      this.setFilteredList()
      this.documentsfirstPage()
    },
    ...mapActions({
      filterByDate: 'filterByDate',
      setFilteredList: 'setFilteredList',
      documentsfirstPage: 'documentsfirstPage'
    })
  }
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
  @include defaultShadow();
  background-color: $bg-secondary;
  padding: .9375rem;
}
.btn--apply, .btn--clear {
  border-radius: 5px;
}
.btn--apply {
  $custom-bgColor: #2D4596;
  background-color: $custom-bgColor;
  border-color: $custom-bgColor;
}
.btn--clear {
  $custom-bgColor: #EAAC4C;
  background-color: $custom-bgColor;
  border-color: $custom-bgColor;
}
.btn__calendar {
  background-color: white;
  &:hover {
    background: white;
  }
}
.calendar__text {
  color: $color-muted;
}
</style>
