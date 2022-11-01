'use strict'

//Carousel img Logo control
var logoImgCont = 0;
imgCarouselLogo();

function imgCarouselLogo(){
    if(logoImgCont > 2){
        logoImgCont = 0;
    }
    logoImgCont = (logoImgCont + 1);
    document.querySelector('#logo-off').src = ('static/img/logo0' + logoImgCont + '.png')
    setTimeout(imgCarouselLogo, 10000);
}

//off product img control
var offImgCont = 0;
offIMG();

function offIMG(){
    if(offImgCont > 4) {
        offImgCont = 0;
    }
    offImgCont = (offImgCont + 1);
    document.querySelector('#product01-img').src = ('static/img/off/off-' + offImgCont + '.webp')
    document.querySelector('#product02-img').src = ('static/img/off/off-' + (offImgCont + 1) + '.webp')
    setTimeout(offIMG, 3000);
}
