// 스크롤 등장과 현재 탭 표시를 담당합니다. 마우스 반응은 style.css에 있습니다.

const STAGGER_MS = 60
const MAX_STAGGER_STEPS = 3

function initReveal() {
  const items = document.querySelectorAll('.reveal')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion || !('IntersectionObserver' in window)) return

  items.forEach((item) => {
    const position = [...item.parentElement.children].indexOf(item)
    item.style.setProperty('--reveal-delay', `${Math.min(position, MAX_STAGGER_STEPS) * STAGGER_MS}ms`)
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
  )

  // 이 클래스가 붙은 뒤에만 숨기므로, 효과가 동작하지 않아도 내용은 항상 보입니다.
  document.documentElement.classList.add('reveal-ready')
  items.forEach((item) => observer.observe(item))
}

function initTabSpy() {
  if (!('IntersectionObserver' in window)) return

  const links = new Map(
    [...document.querySelectorAll('[data-nav]')].map((link) => [link.getAttribute('href').slice(1), link]),
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = links.get(entry.target.id)
        if (entry.isIntersecting) {
          link.setAttribute('aria-current', 'true')
        } else {
          link.removeAttribute('aria-current')
        }
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )

  links.forEach((_, id) => observer.observe(document.getElementById(id)))
}

export function initEffects() {
  initReveal()
  initTabSpy()
}
