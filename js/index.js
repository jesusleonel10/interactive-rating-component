const submit = document.getElementById("submit")
const scoreBtn = document.querySelectorAll(".rating__btn")
const scoreInput = document.querySelectorAll(".rating__number")
const starsSelected = document.getElementById("stars_selected")
const ratingBox = document.getElementsByClassName("rating")[0]
const thanksBox = document.getElementsByClassName("thank-you")[0]

scoreInput.forEach((input, inputIndex) => {
    input.addEventListener("change", () => {
        scoreBtn.forEach((label, labelIndex) => {
            if(inputIndex === labelIndex) {
                if(label.classList.contains("rating__active")) {
                    label.classList.remove("rating__active")
                }
                for (let i = 0; i < scoreBtn.length; i++) {
                        scoreBtn[i].classList.remove("rating__active")
                }
                    label.classList.toggle("rating__active")
                }
        })
    })
})

document.addEventListener("submit", (e) => {
    e.preventDefault()
    const formRating =  e.target
    const valueRating = formRating.score.value

    if (valueRating) {
        starsSelected.innerHTML = valueRating
        ratingBox.classList.remove("show")
        ratingBox.classList.add("hidden")
        thanksBox.classList.remove("hidden")
        thanksBox.classList.add("show")
        console.log(valueRating)
        
    } else {
        submit.classList.remove("animate")
            setTimeout(() => {
                submit.classList.add("animate")
            }, 100)

    }
})


