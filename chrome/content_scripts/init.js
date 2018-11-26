document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch')
  const themeLabel = document.getElementById('theme-label')
  const switchLabel = document.querySelector('.theme-switch-label')
  const themeSwitchInnerButton = document.querySelector('.theme-switch-switch')
  const focusColor = '#ff5500'
  const blurColor = '#ffbf00'

  themeSwitch.addEventListener('click', themeHandler)
  
  themeSwitch.addEventListener('keypress', e => {
    const isEnterKey = e.keyCode === 13
    const isSpacebarKey = e.keyCode === 32

    if (isEnterKey || isSpacebarKey) {
        themeSwitch.checked = !themeSwitch.checked
        themeHandler()
    }
  })

  themeSwitch.addEventListener('focus', () => {
    switchLabel.style = `border-color: ${ focusColor };`
    themeSwitchInnerButton.style = `border-color: ${ focusColor }; background-color: ${ focusColor };`
    themeLabel.style = `color: ${ focusColor };`
  })

  themeSwitch.addEventListener('blur', () => {
    switchLabel.style = `border-color: ${ blurColor };`
    themeSwitchInnerButton.style = `border-color: ${ blurColor }; background-color: ${ blurColor };`
    themeLabel.style = `color: ${ blurColor };`
  })

  themeHandler()
})