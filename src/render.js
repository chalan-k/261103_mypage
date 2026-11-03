// src/content.js의 내용을 index.html의 틀에 채워 넣습니다.

// 프로젝트 카드의 모양: 순서대로 CD 케이스, 메모지, 플로피 디스크
const PROJECT_VARIANTS = ['cd', 'memo', 'floppy']

const isFilled = (value) => typeof value === 'string' && value.trim() !== ''

function getByPath(source, path) {
  return path.split('.').reduce((value, key) => value?.[key], source)
}

function setText(element, value, placeholder) {
  const filled = isFilled(value)
  element.textContent = filled ? value : placeholder
  element.classList.toggle('is-placeholder', !filled)
}

function setLink(element, href, text, placeholder) {
  if (!isFilled(href)) {
    setText(element, '', placeholder)
    return
  }

  const anchor = document.createElement('a')
  anchor.className = 'text-link'
  anchor.href = href
  anchor.textContent = text

  if (!href.startsWith('mailto:')) {
    anchor.target = '_blank'
    anchor.rel = 'noopener noreferrer'
  }

  element.replaceChildren(anchor)
}

function setIcon(useElement, name) {
  useElement.setAttribute('href', `#i-${name}`)
}

function fromTemplate(id) {
  const fragment = document.getElementById(id).content.cloneNode(true)
  const slot = (name) => fragment.querySelector(`[data-slot="${name}"]`)
  return { fragment, slot }
}

function renderList(name, entries, templateId, fill) {
  const list = document.querySelector(`[data-list="${name}"]`)

  list.replaceChildren(
    ...entries.map((entry, index) => {
      const { fragment, slot } = fromTemplate(templateId)
      fill(slot, entry, index)
      return fragment
    }),
  )
}

const twoDigits = (index) => String(index + 1).padStart(2, '0')

export function renderSite(content) {
  const { placeholders } = content

  document.title = content.pageTitle
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', content.pageDescription)

  document.querySelectorAll('[data-text]').forEach((element) => {
    element.textContent = getByPath(content, element.dataset.text) ?? ''
  })

  document.querySelectorAll('[data-placeholder]').forEach((element) => {
    element.placeholder = getByPath(content, element.dataset.placeholder) ?? ''
  })

  renderList('philosophy', content.philosophy.items, 'tpl-diary', (slot, text, index) => {
    slot('number').textContent = twoDigits(index)
    slot('text').textContent = text
  })

  renderList('research', content.research.items, 'tpl-research', (slot, item) => {
    setIcon(slot('icon'), item.icon)
    slot('tab').textContent = item.tab
    slot('title').textContent = item.title
    setText(slot('description'), item.description, placeholders.description)
    slot('recordLabel').textContent = content.research.recordLabel
    setText(slot('record'), item.record, placeholders.pending)
  })

  renderList('projects', content.projects.items, 'tpl-project', (slot, item, index) => {
    slot('root').classList.add(`project--${PROJECT_VARIANTS[index % PROJECT_VARIANTS.length]}`)
    slot('number').textContent = `${content.projects.numberPrefix} ${twoDigits(index)}`
    setText(slot('status'), item.status, placeholders.pending)
    setText(slot('title'), item.title, placeholders.projectTitle)
    setText(slot('description'), item.description, placeholders.description)
    slot('linkLabel').textContent = content.projects.linkLabel
    setLink(slot('link'), item.link, content.projects.linkText, placeholders.link)
  })

  const { email, emailLabel, links } = content.contact
  const guestRows = [
    {
      icon: 'mail',
      label: emailLabel,
      href: isFilled(email) ? `mailto:${email}` : '',
      text: email,
    },
    ...links.map((link) => ({ icon: 'globe', label: link.label, href: link.url, text: link.url })),
  ]

  renderList('contact', guestRows, 'tpl-guest', (slot, row, index) => {
    slot('number').textContent = `No.${index + 1}`
    slot('label').textContent = row.label
    setIcon(slot('icon'), row.icon)
    setLink(slot('value'), row.href, row.text, placeholders.pending)
  })

  renderList('badges', content.badges, 'tpl-badge', (slot, label) => {
    slot('label').textContent = label
  })
}
