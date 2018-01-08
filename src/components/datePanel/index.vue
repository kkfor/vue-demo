<template>
  <span>{{date}}</span>
</template>
<script>
import formatDate from './date'
  export default {
    props: {
      value: {
        type: Date,
        default: ''
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      }
    },
    computed: {
      date:{
        get: function() {
          return formatDate(this.value, this.format)
        }
      }
    }
  }
</script>