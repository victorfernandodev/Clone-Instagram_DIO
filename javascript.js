const nightMode = document.querySelector('night-mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('check', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
})