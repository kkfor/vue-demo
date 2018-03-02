## 深入理解vue之v-model语法糖
vue中用v-model实现双向绑定，其实v-model只是一个语法糖。在自定义组件上也可以用v-model实现传递数据，以及父子组件数据的双向绑定。
### v-model语法糖拆解
vue中v-model的写法如下
```javascript
<input v-model="data"></input>
```
其实v-model是下面写法的简写形式，

```javascript
<input :value="data" @input="data = $event.target.value"></input>
```
- input中value属性设置值为data。  
- 绑定输入事件，$event.target.value获取input中输入的内容，赋值给data
### 自定义组件v-model用法
父组件绑定v-model
v-model默认绑定value属性，赋值为data
```javascript
<foo v-model="data"></foo>
```
子组件通过props接收父组件的value属性值，也就是v-model绑定的值
```javascript
props:['value']
```