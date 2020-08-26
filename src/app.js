import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('wuhu-button',Button)
Vue.component('wuhu-icon',Icon)
Vue.component('button-group',ButtonGroup)

new Vue({
  el:'#app',
data:{
    stopLoading:true
}
})

//单元测试

{
  console.log(Button)
}