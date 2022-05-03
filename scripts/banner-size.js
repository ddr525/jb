window.onload = bannerSize
window.onresize = bannerSize

function bannerSize(){
    document.querySelector('.main__banner-block').setAttribute('style', 'height: '+document.getElementById('banner').height+'px;')
}