// let bgPosition = 0;
// setInterval(() => {
//     bgPosition = Math.floor(Math.random()*100)
//     document.body.style.backgroundPositionX = bgPosition+"%"
// }, 40000);
// setTimeout(function(){
// }, 1000)
let header = document.getElementsByTagName("header")[0];
let bag = document.getElementsByClassName("bag")[0];
let bagButton = document.getElementsByClassName("bagButton")[0];

// window.onclick = (e) => {
    // if (bag.children.includes(e.target)) {
        
        // console.log(bag.children);
    // }
// }
// let bagTransform = 
bagButton.onclick = () => {
    console.log(bagButton.children[0].src);
    if (bagButton.children[0].src.includes("img/bagWhite.svg")) {
        bag.style.transform = "translateY(calc(0% + 100px))";
        bagButton.children[0].src = "img/cross.svg";
        // bag.style.top = 
        // console.log(bag.style.transform);
    } else {
        bag.style.transform = "translateY(-100%)";
        bagButton.children[0].src = "img/bagWhite.svg";
    }
}

function bodyScroll() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        header.style.height = "50px";
        bag.style.top = "-50px";
    } else {
        header.style.height = "100px";
        bag.style.top = "0px";
        // bag.style.transform = "translateY(-0px)";
    }
}



function counterChange(button){
    let currentInput = button.parentElement.getElementsByTagName("input")[0];
    let currentAmount = currentInput.value
    currentInput.value = eval(currentAmount + button.innerHTML + 1) < 0 ? 0 : eval(currentAmount + button.innerHTML + 1);
    updateFinalPrice(currentInput);
}

function updateFinalPrice(currentInput) {
    let price = parseInt(document.getElementsByClassName("price")[0].innerHTML)
    let finalPriceTitle = currentInput.parentElement.parentElement.getElementsByClassName("finalPrice")[0];
    let amount = currentInput.value ? currentInput.value : 0;
    finalPriceTitle.innerHTML = eval(amount + "*" + price) + " руб.";
}