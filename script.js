function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

// pegar a tag img
const img = document.querySelector("#profile img")
// substituir a imagem
if(html.classList.contains('light')){
//se tiver light mode, adicionar a imaem light
img.setAttribute('src', './imagens/avatar-light.png')
} else {
//se tiver sem light mode, manter a imagem normal
img.setAttribute('src', './imagens/avatar.png')
}
      
}







