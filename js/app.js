
//##### Showing Question on click :till line 34
let question = document.getElementsByClassName("q")

let call_ans = document.getElementsByClassName("call_ans")

let arrow = document.getElementsByClassName("fa-solid")

function showans1() {
    call_ans[0].classList.toggle("ans");
    arrow[1].classList.toggle("ans")
    arrow[0].classList.toggle("ans")
}
function showans2() {
    call_ans[1].classList.toggle("ans");
    arrow[2].classList.toggle("ans")
    arrow[3].classList.toggle("ans")
}
function showans3() {
    call_ans[2].classList.toggle("ans");
    arrow[4].classList.toggle("ans")
    arrow[5].classList.toggle("ans")
}
function showans4() {
    call_ans[3].classList.toggle("ans");
    arrow[6].classList.toggle("ans")
    arrow[7].classList.toggle("ans")
}

question[0].addEventListener('click', showans1)
question[1].addEventListener('click', showans2)
question[2].addEventListener('click', showans3)
question[3].addEventListener('click', showans4)