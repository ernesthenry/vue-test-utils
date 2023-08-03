import { mount } from '@vue/test-utils'


const App = {
  props:{
    count:{
      type:Number
    }
  },
  template: `
  <div v-if="count % 2 === 0">
  Count:{{ count }}. Count is even
  </div>

  <div v-if="count % 2 !== 0">
  Count:{{ count }}. Count is odd
  </div>
  `
}


describe('App', ()=>{
  it('render count when even', () =>{
    const wrapper=mount(App,{
      props:{
        count:2
      }
    })
    console.log(wrapper.html())
    // expect(wrapper.html()).toContain('Count:4')
    expect(wrapper.html()).toContain('Count: 2. Count is even')
  })


  it('render count when odd', () =>{
    const wrapper=mount(App,{
      props:{
        count:1
      }
    })
    console.log(wrapper.html())
    // expect(wrapper.html()).toContain('Count:4')
    expect(wrapper.html()).toContain('Count: 1. Count is odd')
  })


})
