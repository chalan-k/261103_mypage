import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import './style.css'

import { content } from './content.js'
import { initEffects } from './effects.js'
import { initGuestbook } from './guestbook.js'
import { renderSite } from './render.js'

renderSite(content)
initEffects()
initGuestbook(content.guestbook)
