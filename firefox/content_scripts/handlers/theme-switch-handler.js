const themeSwitchHandler = (theme, themeSwitch) => {
  theme === 'dark'
    ? themeSwitch.checked = 'checked'
    : themeSwitch.checked = ''
}