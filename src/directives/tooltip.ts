import type { App, DirectiveBinding } from 'vue'

function getPositionClass(modifiers: DirectiveBinding['modifiers']) {
  if (modifiers.top) {
    return 'top'
  }

  return 'top'
}

export const tooltipDirective = (app: App<Element>) => {
  app.directive('tooltip', {
    mounted(el: HTMLElement, binding) {
      init(el, binding)
    },
    updated(el: HTMLElement, binding) {
      init(el, binding)
    }
  })
}

function init(el: HTMLElement, binding: DirectiveBinding<any>) {
  el.setAttribute('data-tooltip', binding.value)
  el.classList.add('with-tooltip')

  const position = getPositionClass(binding.modifiers)
  el.classList.add(`tooltip--${position}`)
}
