const modalSobrepoe = document.querySelector('.modal-sobrepoe')
const fecharModal = document.querySelector('.fechar-modal')
const receitas = document.querySelectorAll('article > img')


for (receita of receitas) {
    receita.addEventListener('click', (e) => {
        modalSobrepoe.classList.add('ativo')
        
        const srcReceita = e.target.getAttribute('src')
        const altReceita = e.target.getAttribute('alt')

        const sabor = e.target.nextSibling.nextSibling.innerText
        const autor = e.target.nextSibling.nextSibling.nextElementSibling.innerText

        modalSobrepoe.querySelector('img').src = srcReceita
        modalSobrepoe.querySelector('img').alt = altReceita
        modalSobrepoe.querySelector('.sabor').innerHTML = sabor
        modalSobrepoe.querySelector('.autor').innerHTML = autor


    })
}

fecharModal.addEventListener('click', () => {
    modalSobrepoe.classList.remove('ativo')

})