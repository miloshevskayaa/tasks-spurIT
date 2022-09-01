const btn = document.querySelector('.collapsible__button'); 
const btn1 = document.querySelector('.collapsible__action--visible'); 
const btn2 = document.querySelector('.collapsible__action--hidden'); 

let cubeAnimation1 = document.querySelector('.collapsible__content').animate(
    {opacity: ['0', '1']},
    {duration: 1000, fill: "both", easing: "ease-out" }
);

cubeAnimation1.pause()

btn.addEventListener('click', btnClick);

function btnClick(){
    if(cubeAnimation1.playState==="paused"){
        cubeAnimation1.play();
    } else {
        cubeAnimation1.reverse();
    }
}
btn1.style.display = 'none';

btn1.onclick = () => {
    btn1.style.display = "none";
    btn2.style.display = "block";
}
btn2.onclick = () => {

    btn1.style.display = "block";
    btn2.style.display = "none";
}