<template>
  <model v-model="data"></model>  
</template>

<script>
import model from './model'

export default {
  data() {
    return {
      data: 123
    }
  },
  components: {
    model
  }
}  
</script>
