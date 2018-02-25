<template>
  <div class="phone">
    <phone v-model="phoneNum"></phone>
  </div>
</template>
<script>
import phone from './phone'
export default {
  data() {
    return {
      phoneNum: '123456;121'
    }
  },
  components: {
    phone
  }
}
</script>
<style scpoed>
  .phone {
    width: 200px;
  }
</style>