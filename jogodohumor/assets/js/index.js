const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () => {
    if (elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/Hulk.png' 
        elementoNome.innerText = 'Hulk' 
        elementoSituacao.innerText = 'Pistola' 
        elementoBtn.value = 'segundo' 
    } else if (elementoBtn.value == 'segundo'){ 
        elementoImg.src = './assets/img/Dr. Hulk.png' 
        elementoNome.innerText = 'Dr. Hulk' 
        elementoSituacao.innerText = 'Pistola geek' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = './assets/img/Dr. Banner.png' 
        elementoNome.innerText = 'Dr. Banner' 
        elementoSituacao.innerText = 'Simples humano' 
        elementoBtn.value = 'primeiro'
    }
})