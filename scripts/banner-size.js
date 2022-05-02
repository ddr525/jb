window.onload = bannerSize
window.onresize = bannerSize

function bannerSize(){
    document.getElementsByClassName('main__banner-block')[0].setAttribute('style', `height: ${document.getElementById('banner').height}px;`)
}