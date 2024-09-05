/**
 * TailwindCSS Dark Mode
 */
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.getElementsByTagName('html')[0].dataset.theme == 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

/**
 * Add the main element classes to body for better styling control.
 * 
 */
let mainClassesString = document.getElementsByTagName('main')[0].className;

let mainClasses = mainClassesString.split(' ');


mainClasses.forEach(function (value) {
  let className = 'main__'+value;

  document.body.classList.add(className);
})
