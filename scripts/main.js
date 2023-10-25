const hover = document.querySelector('.brgr_text')
const spans = document.querySelectorAll('.header_span')
const modal = document.querySelector('.brgr_modal')
const cross = document.querySelector('.cross')
const spanWrapp = document.querySelector('.brgr_header')

hover.onmouseenter = () => {
    for (let span of spans) {
        span.style.backgroundColor = 'darkgray'
        span.style.filter = 'blur(0.6px)'
        hover.style.filter = 'blur(0.6px)'
    }
}

hover.onmouseleave = () => {
    for (let span of spans) {
        span.style.backgroundColor = 'orange'
        hover.style.filter = 'blur(0px)'
        span.style.filter = 'blur(0px)'
    }
}

cross.addEventListener('click', function () {
    modal.style.transform = 'rotate(90deg) translateY(-250%) translateX(90%)'
})

spanWrapp.addEventListener('click', function () {
    modal.style.transform = 'rotate(0deg) translateY(0%) translateX(0%)'
})

const firstWrapp = document.querySelector('.first_main')
const firstImage = document.querySelector('.first_img')
const secondImage = document.querySelector('.second_img')
const thirdImage = document.querySelector('.third_img')
const fourImage = document.querySelector('.four_img')

firstImage.onmouseover = () => {
    firstWrapp.style.backgroundImage = `url('./images/photos/Прямоугольник 3.png')`
}

secondImage.onmouseover = () => {
    firstWrapp.style.backgroundImage = `url('./images/photos/background12.jpg')`
}


thirdImage.onmouseover = () => {
    firstWrapp.style.backgroundImage = `url('./images/photos/background2.jpg')`
}


fourImage.onmouseover = () => {
    firstWrapp.style.backgroundImage = `url('./images/photos/designer-interior.jpg')`
}

const spanWrappRight = document.querySelector('.brgr_right')
spanWrappRight.addEventListener('click', function () {
    modal.style.transform = 'rotate(0deg) translateY(0%) translateX(0%)'
})

// якоря
const firstAncho = document.querySelectorAll('.link_top')
for (let ancho of firstAncho) {
    ancho.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = ancho.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}




const popapLink = document.querySelectorAll('.brgr_part')
for (let Firancho of popapLink) {
    Firancho.addEventListener('click', function (e) {
        e.preventDefault()

        const blockIDFir = Firancho.getAttribute('href')

        document.querySelector(blockIDFir).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let lastAn = document.querySelector('.anchor_end')
lastAn.addEventListener('click', function (e) {
    e.preventDefault()

    const blockIDLast = lastAn.getAttribute('href')

    document.querySelector(blockIDLast).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

// первый блок
let anim = document.querySelector('.for_anim')
let topLeft = document.querySelector('.top_left')
let titleFist = document.querySelector('.title_first')
let rightWrapp = document.querySelector('.right_wrapp')
let textFocus = document.querySelectorAll('.title_bot__two')
let anchorImg = document.querySelector('.anchor_wrapp')


//aнимация прелоада 
window.onload = () => {
    topLeft.style.transform = 'translateX(0%) translateY(0%)'
    anim.style.transform = 'translateY(-200%)'
    titleFist.style.transform = 'translateX(0%)'
    rightWrapp.style.transform = 'translateX(0%) translateY(0%)'
    for (let text of textFocus) {
        text.style.transform = 'scale(1)'
    }
    anchorImg.style.transform = 'scale(1)'
}

// прогресс в хидере
window.onscroll = () => {

    function progressHeader() {
        let scroll = document.querySelector('.scroll')
        let position = document.body.scrollTop || document.documentElement.scrollTop;
        let visota = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (position / visota) * 100;
        scroll.style.width = scrolled + '%';
    }
    progressHeader()


    // общии анимации на сайте
    let forFocus = window.pageXOffset || document.documentElement && document.documentElement.scrollTop
    console.log(forFocus);
    let firstSection = document.querySelector('.first_main')

    // для второго блока
    let orange = document.querySelector('.for_num__anim')
    let contText = document.querySelector('.conrainer_for__text')
    if (forFocus > 550) {
        orange.style.transform = 'translateY(0%)'
        contText.style.transform = 'translateY(0%)'
    } else {
        orange.style.transform = 'translateY(-100%)'
        contText.style.transform = 'translateY(300px)'
    }

    const secondBottText = document.querySelector('.bott_block_sec')

    if (forFocus > 600) {
        secondBottText.style.transform = 'translateY(0%)'
    } else {
        secondBottText.style.transform = 'translateY(200px)'
    }


    let orangeThird = document.querySelector('.for_num__anim_third')
    let contTextSec = document.querySelector('.conrainer_for__text_third')
    if (forFocus > 1600) {
        orangeThird.style.transform = 'translateY(0%)'
        contTextSec.style.transform = 'translateY(0%)'
    } else {
        orangeThird.style.transform = 'translateY(-100%)'
        contTextSec.style.transform = 'translateY(300px)'
    }

    const bottSlide = document.querySelector('.bott_block_third')
    if (forFocus > 1900) {
        bottSlide.style.transform = 'translateY(0%)'
    } else {
        bottSlide.style.transform = 'translateY(400px)'
    }

    const animOraFive = document.querySelector('.for_num__anim_five')
    let contTextFive = document.querySelector('.conrainer_for__text_five')

    if (forFocus > 3300) {
        animOraFive.style.transform = 'translateY(0%)'
        contTextFive.style.transform = 'translateY(0%)'
    } else {
        animOraFive.style.transform = 'translateY(-100%)'
        contTextFive.style.transform = 'translateY(300px)'
    }

    const daSlide = document.querySelector('.bott_sec__slider')
    if (forFocus > 3550) {
        daSlide.style.transform = 'translateY(0%)'
    } else {
        daSlide.style.transform = 'translateY(300px)'
    }

    const sixOrange = document.querySelector('.for_num__anim_six')
    let containerTextSix = document.querySelector('.conrainer_for__text_six')
    if (forFocus > 4923) {
        sixOrange.style.transform = 'translateY(0%)'
        containerTextSix.style.transform = 'translateY(0%)'
    } else {
        sixOrange.style.transform = 'translateY(-100%)'
        containerTextSix.style.transform = 'translateY(300px)'
    }

    let mapWrapp = document.querySelector('.map_wrapp')
    if (forFocus > 5263) {
        mapWrapp.style.transform = 'translateY(0%)'
    } else {
        mapWrapp.style.transform = 'translateY(300px)'
    }
}

// анимация с бегающими числами
const timeCount = 2500;
const step = 1

function counterNum(num) {

    let cou = document.querySelector('.num_item')
    n = 0;
    let t = Math.round(timeCount / (num / step));
    let interval = setInterval(() => {
        n = n + step
        if (n == num) {
            clearInterval(interval)
        }
        cou.innerHTML = n;
    }, t)
}

counterNum(40)

const timeCountSec = 2000;
const stepSec = 1

function counterNumSec(num) {
    let couSec = document.querySelector('.num_item_sec')
    nSec = 0;
    let tSec = Math.round(timeCountSec / (num / stepSec));
    let intervalSec = setInterval(() => {
        nSec = nSec + stepSec
        if (nSec == num) {
            clearInterval(intervalSec)
        }
        couSec.innerHTML = nSec;
    }, tSec)
}

counterNumSec(7)

const timeCountThird = 3000;
const stepThird = 1

function counterNumThird(num) {
    let couThird = document.querySelector('.num_item_third')
    nThird = 0;
    let tThird = Math.round(timeCountThird / (num / stepThird));
    let intervalThird = setInterval(() => {
        nThird = nThird + stepThird
        if (nThird == num) {
            clearInterval(intervalThird)
        }
        couThird.innerHTML = nThird;
    }, tThird)
}

counterNumThird(9)

const timeCountFour = 2500;
const stepFour = 1

function counterNumFour(num) {
    let couFour = document.querySelector('.num_item_four')
    nFour = 0;
    let tFour = Math.round(timeCountFour / (num / stepFour));
    let intervalFour = setInterval(() => {
        nFour = nFour + stepFour
        if (nFour == num) {
            clearInterval(intervalFour)
        }
        couFour.innerHTML = nFour;
    }, tFour)
}

counterNumFour(3)


// слайдер

const sliderImg = document.querySelector('.for_slider__img')
const leftBtn = document.querySelector('.left_btn')
const rightBtn = document.querySelector('.right_btn')
const valueWrapp = document.querySelectorAll('.scroll_btns')
const orangeValue = document.querySelectorAll('.orange_value')
let flag = 0


function slider() {
    valueWrapp[0].addEventListener('click', function () {
        orangeValue[0].style.backgroundColor = 'orange'
        orangeValue[1].style.backgroundColor = 'white'
        orangeValue[2].style.backgroundColor = 'white'
        orangeValue[3].style.backgroundColor = 'white'
        sliderImg.style.backgroundImage = `url("./images/photos/Прямоугольник 1.png")`
        flag = 0
    })

    valueWrapp[1].addEventListener('click', function () {
        orangeValue[0].style.backgroundColor = 'white'
        orangeValue[1].style.backgroundColor = 'orange'
        orangeValue[2].style.backgroundColor = 'white'
        orangeValue[3].style.backgroundColor = 'white'
        sliderImg.style.backgroundImage = `url('./images/photos/Прямоугольник 111.png')`
        flag = 1
    })

    valueWrapp[2].addEventListener('click', function () {
        orangeValue[0].style.backgroundColor = 'white'
        orangeValue[1].style.backgroundColor = 'white'
        orangeValue[2].style.backgroundColor = 'orange'
        orangeValue[3].style.backgroundColor = 'white'
        sliderImg.style.backgroundImage = `url('./images/photos/Контур 1763.png')`
        flag = 2
    })

    valueWrapp[3].addEventListener('click', function () {
        orangeValue[0].style.backgroundColor = 'white'
        orangeValue[1].style.backgroundColor = 'white'
        orangeValue[2].style.backgroundColor = 'white'
        orangeValue[3].style.backgroundColor = 'orange'
        sliderImg.style.backgroundImage = `url('./images/photos/Контур 1764.png')`
        flag = 3
    })

    rightBtn.addEventListener('click', function () {
        flag++
        if (flag >= 4) {
            orangeValue[0].style.backgroundColor = 'orange'
            orangeValue[1].style.backgroundColor = 'white'
            orangeValue[2].style.backgroundColor = 'white'
            orangeValue[3].style.backgroundColor = 'white'
            sliderImg.style.backgroundImage = `url("./images/photos/Прямоугольник 1.png")`
            flag = 0
        } else if (flag == 1) {
            orangeValue[0].style.backgroundColor = 'white'
            orangeValue[1].style.backgroundColor = 'orange'
            orangeValue[2].style.backgroundColor = 'white'
            orangeValue[3].style.backgroundColor = 'white'
            sliderImg.style.backgroundImage = `url('./images/photos/Прямоугольник 111.png')`
        } else if (flag == 2) {
            orangeValue[0].style.backgroundColor = 'white'
            orangeValue[1].style.backgroundColor = 'white'
            orangeValue[2].style.backgroundColor = 'orange'
            orangeValue[3].style.backgroundColor = 'white'
            sliderImg.style.backgroundImage = `url('./images/photos/Контур 1763.png')`
        } else if (flag == 3) {
            orangeValue[0].style.backgroundColor = 'white'
            orangeValue[1].style.backgroundColor = 'white'
            orangeValue[2].style.backgroundColor = 'white'
            orangeValue[3].style.backgroundColor = 'orange'
            sliderImg.style.backgroundImage = `url('./images/photos/Контур 1764.png')`
        }
    });

    leftBtn.addEventListener('click', function () {
        if (flag == 1) {
            sliderImg.style.backgroundImage = `url("./images/photos/Прямоугольник 1.png")`
            orangeValue[0].style.backgroundColor = 'orange'
            orangeValue[1].style.backgroundColor = 'white'
            orangeValue[2].style.backgroundColor = 'white'
            orangeValue[3].style.backgroundColor = 'white'
            flag--
        } else if (flag == 2) {
            orangeValue[0].style.backgroundColor = 'white'
            orangeValue[1].style.backgroundColor = 'orange'
            orangeValue[2].style.backgroundColor = 'white'
            orangeValue[3].style.backgroundColor = 'white'
            sliderImg.style.backgroundImage = `url('./images/photos/Прямоугольник 111.png')`
            flag--
        } else if (flag == 3) {
            orangeValue[0].style.backgroundColor = 'white'
            orangeValue[1].style.backgroundColor = 'white'
            orangeValue[2].style.backgroundColor = 'orange'
            orangeValue[3].style.backgroundColor = 'white'
            sliderImg.style.backgroundImage = `url('./images/photos/Контур 1763.png')`
            flag--
        }
    })

    orangeValue[0].style.backgroundColor = 'orange'
}

slider()


// второй слайдер
const secLeftBtn = document.querySelector('.second_slider_btn__left')

const secRightBtn = document.querySelector('.second_slider_btn__right')

const firstImg = document.querySelector('.img_da')
const secImg = document.querySelector('.img_da_sec')
const thirdImg = document.querySelector('.img_da_third')
let arlekin = 0;

secRightBtn.addEventListener('click', function () {
    arlekin++
    if (arlekin >= 3) {
        firstImg.style.transform = 'translate(-100px, 80px)'
        firstImg.style.zIndex = "3"
        secImg.style.transform = 'translate(0)'
        secImg.style.zIndex = "2"
        thirdImg.style.transform = 'translate(100px, -80px)'
        thirdImg.style.zIndex = "1"
        arlekin = 0;
    } else if (arlekin == 1) {
        secImg.style.transform = 'translate(-100px, 80px)'
        secImg.style.zIndex = "3"
        firstImg.style.zIndex = "1"
        firstImg.style.transform = 'translate(100px, -80px)'
        thirdImg.style.transform = 'translate(0)'
        thirdImg.style.zIndex = "2"
    } else if (arlekin == 2) {
        thirdImg.style.transform = 'translate(-100px, 80px)'
        thirdImg.style.zIndex = "3"
        secImg.style.transform = 'translate(100px, -80px)'
        secImg.style.zIndex = "1"
        firstImg.style.transform = 'translate(0)'
        firstImg.style.zIndex = "2"
    }
})

secLeftBtn.addEventListener('click', function () {
    if (arlekin == 1) {
        firstImg.style.transform = 'translate(-100px, 80px)'
        firstImg.style.zIndex = "3"
        secImg.style.transform = 'translate(0)'
        secImg.style.zIndex = "2"
        thirdImg.style.transform = 'translate(100px, -80px)'
        thirdImg.style.zIndex = "1"
        arlekin--
    } else if (arlekin == 2) {
        secImg.style.transform = 'translate(-100px, 80px)'
        secImg.style.zIndex = "3"
        firstImg.style.zIndex = "1"
        firstImg.style.transform = 'translate(100px, -80px)'
        thirdImg.style.transform = 'translate(0)'
        thirdImg.style.zIndex = "2"
        arlekin--
    }
})

// новостной 
let news = document.querySelectorAll('.news_item')
let newsItem = document.querySelectorAll('.black_item')
news[0].onmouseenter = () => {
    newsItem[0].style.transform = 'translateY(-100%)'
}
news[0].onmouseleave = () => {
    newsItem[0].style.transform = 'translateY(0%)'
}

news[1].onmouseenter = () => {
    newsItem[1].style.transform = 'translateY(-100%)'
}
news[1].onmouseleave = () => {
    newsItem[1].style.transform = 'translateY(0%)'
}

news[2].onmouseenter = () => {
    newsItem[2].style.transform = 'translateY(-100%)'
}
news[2].onmouseleave = () => {
    newsItem[2].style.transform = 'translateY(0%)'
}

let darkWrapp = document.querySelector('.after_block_anim')
let dark = document.querySelector('.dark')
let cuzya = document.querySelector('.hover_after__img')

darkWrapp.onmouseenter = () => {
    dark.style.backgroundColor = 'transparent'
    dark.zIndex = '-1'
}

darkWrapp.onmouseleave = () => {
    dark.style.backgroundColor = 'rgba(0, 0, 0, 0.377)'
    dark.zIndex = '1'
}