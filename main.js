let h1 = document.querySelector(".time")
let second = 0
let minute = 0
let hour = 0
let timer

let plays=document.querySelector(".play")
function play() {
plays.classList.add("desble")
    timer = setInterval(() => {
        second++
        if (second == 60) {
            second = 0
            minute++

        }
        if (minute == 60) {
            second = 0
            minute = 0
            hour++
        }
        h1.innerHTML = `${hour < 10 ? "0" + hour : hour} : ${minute < 10 ? "0" + minute : minute} : ${second < 10 ? "0" + second : second}`



    }, 1000);

}
function watchstop() {
plays.classList.remove("desble")

    clearInterval(timer)

}
function watchrest() {
plays.classList.remove("desble")

    clearInterval(timer)
    h1.innerHTML = "00 : 00 : 00"
    second = 0
    minute = 0
    hour = 0

}