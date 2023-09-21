import type { App } from 'vue'
import { tooltipDirective } from './tooltip'

const directives = (app: App<Element>) => {
  tooltipDirective(app)
}

export default directives
