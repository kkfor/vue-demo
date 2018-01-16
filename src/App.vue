<template>
  <div id="app">
  <!-- <DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="aaa"></DatePicker>
  <date-panel v-model="aaa"></date-panel> -->
  <!-- <v-model v-model="abc"></v-model>
  {{abc}} -->
  <Modal v-model="open" @on-ok="ok" :loading="loading">
    <Button @click="clickMe">点击</Button>
  </Modal>
  </div>
</template>

<script>
import vModel from './components/vModel'
import datePanel from './components/datePanel'
export default {
  components: {
    datePanel,
    vModel
  },
  data() {
    return {
      aaa: new Date(),
      abc: '2343',
      open: true,
      loading: true
    }
  },
  methods: {
    ok() {
      this.loading = true
    },
    clickMe() {
      this.loading = false
      this.$nextTick(() => {
        this.loading = true
      })
    }
  }
}

</script>

