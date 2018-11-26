const themeHandler = () => {
  const theme = localStorage.getItem('theme') || 'dark'
  const themeSwitch = document.getElementById('theme-switch')
  const hasThemeAttribute = themeSwitch.getAttribute('theme')
  const isThemeSwitchChecked = themeSwitch.checked
  
  if (!hasThemeAttribute) {
      document.getElementById('theme').href = `css/${theme}-theme.css`
      themeSwitch.setAttribute('theme', theme)
      themeSwitchHandler(theme, themeSwitch)
      return
  }

  if (isThemeSwitchChecked) {
      localStorage.setItem('theme', 'dark')  
      themeSwitch.setAttribute('theme', 'dark')
      document.getElementById('theme').href = `css/dark-theme.css`
      return
  }

  localStorage.setItem('theme', 'light')
  themeSwitch.setAttribute('theme', 'light')
  themeSwitch.removeAttribute('checked')
  document.getElementById('theme').href = `css/light-theme.css`
}