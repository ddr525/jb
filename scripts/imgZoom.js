function disableScroll() {
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        }
}

window.onmousemove = function (e) {
    const img = document.querySelector('.product-image');
    const imgX = document.querySelector('.product-image').getBoundingClientRect();
    const imgY = document.querySelector('.product-image').getBoundingClientRect();
    if (e.clientX > imgX.x && 
        e.clientY > imgY.y &&
        e.clientX < (imgX.x + img.offsetWidth) && 
        e.clientY < (imgY.y + img.offsetHeight)) {
        console.log('stop');
    }
}
