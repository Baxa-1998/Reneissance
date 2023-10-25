function filter() {
    const buttons = document.querySelectorAll('.btn_filt')
    const blocks = document.querySelectorAll('.test')

    function mainFilt(category, items) {
        items.forEach((item) => {
            const isItemDone = !item.classList.contains(category)
            const allBtn = category.toLowerCase() === 'all'
            if(isItemDone && !allBtn) {
                item.classList.add('focusPocus')
            } else {
                item.classList.remove('hide')
                item.classList.remove('focusPocus')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const currentCat = button.dataset.filter
            mainFilt(currentCat, blocks)
        })
    })

    blocks.forEach((block) => {
        block.ontransitionend = () => {
            if(block.classList.contains('focusPocus')) {
                block.classList.add('hide')
            }
        }
    })
}

filter()
let popap = document.querySelector('.popap')
let brgrWrapp = document.querySelector('.brgr_header-fil')
let brgrText = document.querySelector('.brgr_text-fil')
let headerSpan = document.querySelectorAll('.header_span-fil')
brgrWrapp.addEventListener('click', function() {
    headerSpan[0].style.backgroundColor = 'gray'
    headerSpan[1].style.backgroundColor = 'gray'
    brgrText.style.color = 'gray'
    headerSpan[0].style.filter = 'blur(1px)'
    headerSpan[1].style.filter = 'blur(1px)'
    brgrText.style.filter = 'blur(1px)'
    popap.style.transform = 'rotate(0deg) translate(0)'
})

let close = document.querySelector('.popap_close')
let cross = document.querySelector('.popap_cross')

cross.addEventListener('click', function() {
    headerSpan[0].style.backgroundColor = 'orange'
    headerSpan[1].style.backgroundColor = 'orange'
    brgrText.style.color = 'orange'
    headerSpan[0].style.filter = 'blur(0px)'
    headerSpan[1].style.filter = 'blur(0px)'
    brgrText.style.filter = 'blur(0px)'
    popap.style.transform = 'rotate(90deg) translate(100%, -100%)'
})

close.addEventListener('click', function() {
    headerSpan[0].style.backgroundColor = 'orange'
    headerSpan[1].style.backgroundColor = 'orange'
    brgrText.style.color = 'orange'
    headerSpan[0].style.filter = 'blur(0px)'
    headerSpan[1].style.filter = 'blur(0px)'
    brgrText.style.filter = 'blur(0px)'
    popap.style.transform = 'rotate(90deg) translate(100%, -100%)'
})