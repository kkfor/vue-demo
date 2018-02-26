<template>
  <div v-clickoutside="close">
    <Input readonly v-model="showValue" @click.native="show = !show"></Input>
    <ul class="more" v-show="show">
      <li v-for="(item, index) in itemArr" v-if="item.status" :key="index">
        <Row>
          <Col span="18">
            <Input type="text" placeholder="电话号码" size="small" @on-change="handleInput(index, arguments)">{{item.value}}</Input>
          </Col>
          <Col span="4" offset="1">
            <Button type="ghost" size="small" @click="handleDel(index)">删除</Button>
          </Col>
        </Row>
      </li>
      <Row>
        <Col span="12">
          <Button type="dashed" long @click="handleAdd" icon="plus-round" size="small">添加</Button>
        </Col>
      </Row>
    </ul>
  </div>
</template>
<script>
import clickoutside from "directives/clickoutside";
export default {
  props: ["value"],
  directives: {
    clickoutside
  },
  data() {
    return {
      showValue: this.value,
      show: false,
      index: 1,
      itemArr: [
        {
          value: '',
          index: 1,
          status: true
        }
      ],
      inArr: []
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    handleAdd() {
      this.index++
      this.itemArr.push({
        value: '',
        index: this.index,
        status: true
      })
    },
    handleDel(i) {
      this.itemArr[i].status = false
      this.forValue()
    },
    handleInput(i, e) {
      this.itemArr[i].value = e[0].target.value
      this.forValue()
    },
    forValue() {
      this.inArr = []
      this.itemArr.forEach((v, i) => {
        if(v.status) {
          this.inArr.push(v)
        }
      })
      this.showValue = ''
      this.inArr.forEach((v, i) => {
        this.showValue += v.value
        if(i !== this.inArr.length-1) {
          this.showValue += ';'
        }
      })
      console.log(this.showValue)
      // this.showValue = str
      // this.$emit('input', this.showValue)
    }

  }
};
</script>
<style scpoed lang="scss">
.more {
  border: 1px solid #eee;
  overflow: hidden;
  padding: 4px 6px;
  li {
    padding: 3px 0px;
    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }
}
</style>