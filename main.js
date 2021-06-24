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
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    //offsetHeight deslocamento da altura.
    const navHeight = header.offsetHeight

    //aqui ele vai verificar se o scroll tem a altura maior ou igual a do header.
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
}

// Testimonials slider
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard: true,
})

//Scroll Review: mostrar elementos quando der um scroll na pagina
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '700',
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text, 
#about .image, #about .text,
#services header, #services card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social,
`, { interval: 100 })

// Botão voltar para o topo
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 760){
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
}

// when scroll
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
})
