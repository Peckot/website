import './theme-preview.css'

export function mountThemePreview() {
  const frame = document.createElement('iframe')
  frame.className = 'theme-preview-frame'
  frame.title = '主题调试预览'
  frame.src = window.location.href

  const toolbar = document.createElement('div')
  toolbar.className = 'theme-preview-toolbar'
  toolbar.setAttribute('role', 'group')
  toolbar.setAttribute('aria-label', '主题调试')
  toolbar.innerHTML = `
    <button type="button" data-scheme="light dark">系统</button>
    <button type="button" data-scheme="light">亮色</button>
    <button type="button" data-scheme="dark">暗色</button>
  `

  const buttons = toolbar.querySelectorAll('button')
  function setScheme(scheme) {
    frame.style.colorScheme = scheme
    toolbar.style.colorScheme = scheme
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.scheme === scheme))
    }
  }

  for (const button of buttons) {
    button.addEventListener('click', () => setScheme(button.dataset.scheme))
  }

  setScheme('light dark')
  document.querySelector('#app').append(toolbar, frame)
}
