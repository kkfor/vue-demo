<template>
  <div>
    <model v-model="data"></model>
    <input type="text" v-model="data">
  </div>
</template>

<script>
import model from './model'

export default {
  data() {
    return {
      data: 123
    }
  },
  created() {
    setTimeout(() => {
      this.data = 3333333
    }, 1000)
  },
  components: {
    model
  }
}  
</script>
