window.onscroll = headerFixed
function headerFixed() {
    if (window.scrollY >= document.querySelector('.header__topbar').offsetHeight) {
        const header = document.querySelector('.header__main')
        header.setAttribute('style', 'position: fixed; top: 0; left: 0; box-shadow: black 0px -15px 20px')
        document.querySelector('nav.navbar').setAttribute('style', 'margin-top: '+header.offsetHeight+'px')
    }
    else{
        document.querySelector('.header__main').removeAttribute('style')
        document.querySelector('nav.navbar').removeAttribute('style')
    }
}