import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'

document.body.innerHTML = `
<div id="app" style="height:10000px">
</div>`

describe('test AppHeader', () => {
  it('should render', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('h2').text()).toBe('в-синема')
  })
  it("component's class 'sticky' is false", () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.classes()).not.toContain('sticky')
  })
  it('imitate scroll', async () => {
    const wrapper = mount(AppHeader, {
      attachTo: document.getElementById('app') as HTMLElement
    })
    window.dispatchEvent(new CustomEvent('scroll', { detail: 200 }))
    await wrapper.trigger('scroll')
    console.log(wrapper.classes())
  })
})
