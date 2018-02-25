<template>
  <div v-clickoutside="close">
    <Input readonly v-model="value" @click.native="show = !show"></Input>
    <div class="more" v-if="show">
      123
    </div>
  </div>
</template>
<script>
import clickoutside from 'directives/clickoutside'
export default {
  props: ['value'],
  directives: {
    clickoutside
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>
<style scpoed>
.more {
  border: 1px solid #eee
}
</style>