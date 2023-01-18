const $ = document

const ratingBtnsContainer = $.querySelector('.rating-btns')
const ratingBtns = $.querySelectorAll('.rating-btn')
const btnSubmit = $.querySelector('#submit')
const ratingBox = $.querySelector('.rating-box')
const resultBox = $.querySelector('.result-box')
const ratingPoint = $.querySelector('.rating-point')

userRate = null;

ratingBtnsContainer.addEventListener('click', (e) => {
    isBtnClicked = Array.from(ratingBtns).includes(e.target)

    if(isBtnClicked){
        userRate = e.target.innerText
    }
})

btnSubmit.addEventListener('click', () => {
    if(userRate){
        ratingPoint.innerText = userRate
        ratingBox.style.display = 'none'
        resultBox.style.display = 'block'
    }
})

