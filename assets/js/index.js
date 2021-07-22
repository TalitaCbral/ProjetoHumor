const elementoNome = document.getElementById('nome')
const elementoHumor = document.querySelector('#humor')
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#alterar')

elementoBtn.addEventListener('click', () =>{
if(elementoBtn.value == 'primeiro'){
    elementoImg.src = './assets/img/feliz.jpg'
    elementoNome.innerText = 'Harry'
    elementoHumor.innerText = 'To Feliz pô!'
    elementoBtn.value = 'segundo'
}else if(elementoBtn.value == 'segundo'){
    elementoImg.src = './assets/img/harrypensativo.jpg'
    elementoNome.innerText = 'Harry'
    elementoHumor.innerText = 'To pensando aqui cara!'
    elementoBtn.value = 'terceiro'
}else{
    elementoImg.src = './assets/img/harrynormal.png'
    elementoNome.innerText = 'Harry'
    elementoHumor.innerText = 'To normalzão!'
    elementoBtn.value = 'primeiro'
    }
})