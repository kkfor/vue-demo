## 深入解析vue之v-model语法糖
vue中用v-model实现双向绑定，其实v-model只是一个语法糖。在自定义组件上也可以用v-model实现传递数据，以及父子组件数据的双向绑定。
### v-model语法糖拆解
```javascript
<input v-model="data"></input>
<input :value="data" @input="something = $event.target.value"></input>
```
### 父子组件双向绑定