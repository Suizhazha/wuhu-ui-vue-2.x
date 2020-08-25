import Vue from 'vue';
import Button from './button'
import Icon from './icon'


Vue.component('wuhu-button',Button)
Vue.component('wuhu-icon',Icon)

new Vue({
  el:'#app',
data:{
    stopLoading:true
}
})