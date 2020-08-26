import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from  './input.vue'


Vue.component('wuhu-button',Button)
Vue.component('wuhu-icon',Icon)
Vue.component('button-group',ButtonGroup)
Vue.component('wuhu-input',Input)

new Vue({
  el:'#app',
data:{
    stopLoading:true,
    message:'hi'
},

  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }
})



