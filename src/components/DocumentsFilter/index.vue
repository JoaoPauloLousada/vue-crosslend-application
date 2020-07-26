<template>
  <!-- <div class="col-3"> -->
    <div class="filter-wrapper rounded" :class="{closed: isClosed}">
      <div class="title d-flex mb-4">
        <p class="font-weight-bold text-gray-700" @click="open">{{title}}</p>
        <button type="button" class="close d-md-none" aria-label="Close" @click="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="mb-4 date-picker">
        <DatePicker v-model="dateFrom" :popover="{ placement: 'bottom', visibility: 'click' }">
          <button class="btn btn-block btn__calendar d-flex align-items-center">
            <span class="mr-2"><CalendarBlank fillColor="#646464" /></span>
            <span class="font-weight-bold calendar__text">{{from}}</span>
            <span class="ml-auto"><ChevronDown fillColor="#2d4596" :size="28" /></span>
          </button>
        </DatePicker>
      </div>
      <div class="mb-4 date-picker">
        <DatePicker v-model="dateTo" :popover="{ placement: 'bottom', visibility: 'click' }">
          <button class="btn btn-block btn__calendar d-flex align-items-center">
            <span class="mr-2"><CalendarBlank fillColor="#646464" /></span>
            <span class="font-weight-bold calendar__text">{{to}}</span>
            <span class="ml-auto"><ChevronDown fillColor="#2d4596" :size="28" /></span>
          </button>
        </DatePicker>
      </div>

      <div class="flex-column filter-buttons">
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
  <!-- </div> -->
</template>

<script>
import { mapActions } from 'vuex'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import CalendarBlank from 'vue-material-design-icons/CalendarBlank.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import { formatDate, firstDateIsGreater } from '@/services/helpers/date'

export default {
  components: {
    DatePicker,
    CalendarBlank,
    ChevronDown
  },
  data () {
    return {
      title: 'Filter by',
      dateFrom: null,
      dateTo: null,
      isClosed: false
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
    close () {
      this.isClosed = true
    },
    open () {
      this.isClosed = false
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
  transition: all 650ms;

  @include media-breakpoint-down(sm) {
    position: absolute;
    z-index: 9;
    width: 75vw;
    left: 0;

    &.closed {
      transform: translateX(-85%);

      .title button, .date-picker, .filter-buttons {
        display: none;
      }
      .title {
        justify-content: flex-end;
        p {
          transform: rotateZ(-90deg);
          margin-right: -25px;
          margin-top: 10%;
        }
      }
    }
  }
}
.title {
  justify-content: space-between;
  p {
    transition: all 650ms;
    margin: 0;
  }
}
.filter-buttons {
  display: flex;
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
