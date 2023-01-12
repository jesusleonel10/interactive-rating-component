const submit = document.getElementById("submit")
const starsNumbers = document.querySelectorAll(".rating__number")
const starsSelected = document.getElementById("stars_selected")
const ratingBox = document.getElementsByClassName("rating")[0]
const thanksBox = document.getElementsByClassName("thank-you")[0]
const required = document.getElementsByClassName("rating__required")[0]

const arr = [...starsNumbers]
arr.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        //Si al que se hizo clic tiene la clase, la borramos
        if (e.target.classList.contains("rating__active")) {
            e.target.classList.remove("rating__active")
            return
        } 
        //Los demas botones le borramos la clase
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove("rating__active");
          }
        //Al nuevo boton que se haga clic, agregamos o quitamos la clase
        e.target.classList.toggle("rating__active")

        
    })
})


submit.addEventListener("click", () => {
    arr.forEach((element, index) => {
        if (element.classList.contains("rating__active")) {
            let number = element.innerHTML
            starsSelected.innerHTML = number
            ratingBox.style.display = "none"
            thanksBox.style.display = "flex"
        } else {
            required.classList.remove("hidden")
            required.classList.add("show")
            submit.classList.remove("animate")
            setTimeout(() => submit.classList.add("animate"), 100)
            setTimeout(() => {
                required.classList.remove("show")
                required.classList.add("hidden")
            }, 2000)
        }
    })
})