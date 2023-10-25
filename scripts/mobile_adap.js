let textBrgr = document.querySelector('.text_brgr')
let crossMob = document.querySelector('.popap_cross_mobile')
let closeMob = document.querySelector('.popap_close_mobile')
let popapMob = document.querySelector('.popap_mobile')
let textPopap = document.querySelectorAll('.content_popap__text')

function forFirst() {
    textPopap[0].style.transform = 'translateX(0)'
    textPopap[0].style.opacity = '1'
}

function forSec() {
    textPopap[1].style.transform = 'translateX(0)'
    textPopap[1].style.opacity = '1'
}

function forThird() {
    textPopap[2].style.transform = 'translateX(0)'
    textPopap[2].style.opacity = '1'
}
textBrgr.addEventListener('click', function () {
    popapMob.style.transform = 'translate(0%, 0%) rotate(0deg)';
    setTimeout(forFirst, 500)
    setTimeout(forSec, 700)
    setTimeout(forThird, 900)
})

function forFirstNet() {
    textPopap[0].style.transform = 'translateX(100%)'
    textPopap[0].style.opacity = '0'
}

function forSecNet() {
    textPopap[1].style.transform = 'translateX(100%)'
    textPopap[1].style.opacity = '0'
}

function forThirdNet() {
    textPopap[2].style.transform = 'translateX(100%)'
    textPopap[2].style.opacity = '0'
}

crossMob.addEventListener('click', function () {
    popapMob.style.transform = 'translate(100%, -100%) rotate(90deg)'
    setTimeout(forFirstNet, 500)
    setTimeout(forSecNet, 700)
    setTimeout(forThirdNet, 900)
})

closeMob.addEventListener('click', function () {
    popapMob.style.transform = 'translate(100%, -100%) rotate(90deg)'
    setTimeout(forFirstNet, 500)
    setTimeout(forSecNet, 700)
    setTimeout(forThirdNet, 900)
})

const mobileText = document.querySelectorAll('.content_popap__text')
for (let texta of mobileText) {
    texta.addEventListener('click', function (e) {
        e.preventDefault()

        const blockIDMob = texta.getAttribute('href')

        document.querySelector(blockIDMob).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


let opaPopa = document.querySelector('.img_phone');
let popaFull = document.querySelector('.popap_for__tel')
let formDa = document.querySelector('.for_text__tel_popap');
let xaDa = document.querySelector('.close_popa')
let body = document.querySelector('body')

opaPopa.addEventListener('click', function () {
    popaFull.style.visibility = 'visible'
    formDa.style.transform = 'perspective(10000px) rotateX(0deg) translateY(0px)'
    formDa.style.visibility = 'visible'
    body.style.overflow = 'hidden'
})

xaDa.addEventListener('click', function () {
    popaFull.style.visibility = 'hidden'
    formDa.style.transform = 'perspective(10000px) rotateX(80deg) translateY(-600px)'
    formDa.style.visibility = 'hidden'
    body.style.overflow = 'visible'
})