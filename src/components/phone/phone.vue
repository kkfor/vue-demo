<template>
  <div v-clickoutside="close">
    <Input readonly v-model="value" @click.native="show = !show"></Input>
    <ul class="more" v-if="show">
      <li v-for="item in num">
        <Row>
          <Col span="18">
            <Input type="text" placeholder="电话号码" size="small"></Input>
          </Col>
          <Col span="4" offset="1">
            <Button type="ghost" size="small">删除</Button>
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
      show: false,
      num: 2
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    handleAdd() {
      this.num++
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