<template>
  <div id="app">
    <div>
      123
      <router-link to="vmodel"></router-link>
    </div>
    <router-view></router-view>
  <!-- <DatePicker type="date" placeholder="Select date" style="width: 200px" v-model="aaa"></DatePicker>
  <date-panel v-model="aaa"></date-panel> -->
  <!-- <v-model v-model="abc"></v-model>
  {{abc}} -->
  <!-- <Modal v-model="open" @on-ok="ok" :loading="loading">
    <Button @click="clickMe">点击</Button>
  </Modal> -->
  </div>
</template>

<script>

export default {
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

