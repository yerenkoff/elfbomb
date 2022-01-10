// let bgPosition = 0;
// setInterval(() => {
//     bgPosition = Math.floor(Math.random()*100)
//     document.body.style.backgroundPositionX = bgPosition+"%"
// }, 40000);
// setTimeout(function(){
// }, 1000)
let header = document.getElementsByTagName("header")[0];
function bodyScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
        header.style.height = "50px";
    } else {
        header.style.height = "100px";
    }
}