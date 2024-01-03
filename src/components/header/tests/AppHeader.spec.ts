import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'

document.body.innerHTML = `
<div id="app" style="height:10000px">
</div>`

describe('test AppHeader', () => {
  it('should render', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('h2').text()).toBe('в-синема')
  })
  it('class must not contain a `scroll` class by default', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.classes()).not.toContain('scroll')
  })
})
