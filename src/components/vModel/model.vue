<template>
<div>
  <input type="text" v-model="data"> {{data}}
</div>
</template>
<script>
  export default {
    props:["value"],
    model: {
      prop:'value',
      event: 'dfd'
    },
    computed: {
      data: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('dfd',value)
          return value
        }
      }
    }

  }
</script>
