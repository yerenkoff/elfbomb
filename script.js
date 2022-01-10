// let bgPosition = 0;
// setInterval(() => {
//     bgPosition = Math.floor(Math.random()*100)
//     document.body.style.backgroundPositionX = bgPosition+"%"
// }, 40000);
// setTimeout(function(){
// }, 1000)
let header = document.getElementsByTagName("header")[0];


function bodyScroll() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        header.style.height = "50px";
    } else {
        header.style.height = "100px";
    }
}



function counterChange(arrow, sign){
    let currentAmount = arrow.parentElement.previousElementSibling.value
    let currentInput = arrow.parentElement.previousElementSibling;
    currentInput.value = eval(currentAmount + sign + 1) < 0 ? 0 : eval(currentAmount + sign + 1);
    console.log(currentAmount);
}