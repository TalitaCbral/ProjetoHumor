const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () => {
    if (elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/harrynormal.png' 
        elementoNome.innerText = 'Harry Potter' 
        elementoSituacao.innerText = 'To normalzão' 
        elementoBtn.value = 'segundo' 
    } else if (elementoBtn.value == 'segundo'){ 
        elementoImg.src = './assets/img/harrypensativo.jpg' 
        elementoNome.innerText = 'Harry Potter' 
        elementoSituacao.innerText = 'To pensando po!' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = './assets/img/feliz.jpg' 
        elementoNome.innerText = 'Harry Potter' 
        elementoSituacao.innerText = 'To felizão' 
        elementoBtn.value = 'primeiro'
    }
})