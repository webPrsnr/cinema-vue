import type { App } from 'vue'
import { tooltipDirective } from './tooltip'
import { createHead } from '@unhead/vue'
import { loadImages } from '@/utils/setImages'
const head = createHead()

const directives = (app: App<Element>) => {
  tooltipDirective(app)
  app.use(head)
  loadImages()
}

export default directives
