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

//mudar o header da pagina colocando sombra ne quando der o scroll
const header = document.querySelector('#header')
//offsetHeight deslocamento da altura.
const navHeight = header.offsetHeight

window.addEventListener('scroll',() => {
    //aqui ele vai verificar se o scroll tem a altura maior ou igual a do header.
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
})

// Testimonials slider

const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard: true,
})