<template>
  <div class="phone">
    <Form :model="formData" :rules="rules" ref="form">
      <FormItem prop="phone">
        {{formData.phone+'---'}}
        <phone v-model="formData.phone"></phone>
      </FormItem>
      <Button type="primary" @click="handleSubmit('form')">提交</Button>
    </Form>
  </div>
</template>
<script>
import phone from './phone'
import rules from 'mixins/rules'

export default {
  mixins: [rules],
  data() {
    return {
      formData: {
        phone: ''
      },
      phoneNum: '123456;121'
    }
  },
  components: {
    phone
  },
  methods: {
    handleSubmit(name) {
      console.log(this.rules)
      this.$refs[name].validate(res => {
        if(res) {
          this.$Message.success('Success')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
<style scpoed>
  .phone {
    width: 200px;
  }
</style>