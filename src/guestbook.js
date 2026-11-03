// 방명록 글을 페이지 이동 없이 Netlify Forms로 보냅니다.

export function initGuestbook(messages) {
  const form = document.querySelector('[data-guestbook]')
  const status = form.querySelector('[data-guestbook-status]')
  const button = form.querySelector('button[type="submit"]')

  const showStatus = (text, state = '') => {
    status.textContent = text
    status.classList.toggle('is-success', state === 'success')
    status.classList.toggle('is-error', state === 'error')
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    button.disabled = true
    showStatus(messages.sending)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      form.reset()
      showStatus(messages.success, 'success')
    } catch {
      // 작성한 글은 지우지 않아 다시 보낼 수 있게 둡니다.
      showStatus(messages.error, 'error')
    } finally {
      button.disabled = false
    }
  })
}
