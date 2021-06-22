//abre e fecha o menu quando clicar no icone.
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click',() => {
        //Ele esta pegando o nav e vendo a lista de classes dele e adicionando ou tirando a classe show nele.
        nav.classList.toggle('show')
    })
}

//Quando clicar em um item do menu, esconder o menu.
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click',() => {
        nav.classList.remove('show')
    })
}