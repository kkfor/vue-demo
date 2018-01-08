<template>
  <div id="app">
  <DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="aaa"></DatePicker>
  <date-panel v-model="aaa"></date-panel>
  </div>
</template>

<script>
import datePanel from './components/datePanel'
export default {
  components: {
    datePanel
  },
  data() {
    return {
      aaa: new Date()
    }
  }
   
}

</script>

