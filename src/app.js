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



import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

//单元测试
{
  const Constructor = Vue.extend(Button)
  console.log(Constructor)

  //动态生成按钮，通过JS写入页面
  const button  = new Constructor({
    propsData:{
      icon: 'down'
    }
  })
  button.$mount( '#test'  )
  let useEl=button.$el.querySelector('use')
  console.log(useEl)
  const  href = useEl.getAttribute('xlink:href')
expect(href).to.eq('down')
}


{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}


{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}


{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}


{
  // mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()

  let spy = chai.spy(function(){})
  vm.$on('click', spy)
// 希望这个函数被执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}