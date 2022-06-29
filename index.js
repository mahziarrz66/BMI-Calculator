const wrapper=document.querySelector(".wrapper");
const weight=document.querySelector(".weight");
const container=document.querySelector(".container");
const height=document.querySelector(".height");
const kg=document.querySelector(".kg");
const cm=document.querySelector(".cm");
const loader=document.querySelector(".loader");
let number=document.querySelector(".number");
let level=document.querySelector(".level");
const preloader=document.querySelector(".preloader");
const closeIcon=document.querySelector(".close");
let thumb=document.querySelectorAll(".thumb");
let progress=document.querySelectorAll(".progress");

//Input Slider
function Change() {
    let weightVal=weight.value;
    let heightVal=height.value;
    thumb[0].style.left=weightVal + 'px';
    progress[0].style.width=weightVal + 'px';
    thumb[1].style.left=heightVal + 'px';
    progress[1].style.width=heightVal + 'px';
    kg.innerHTML = weightVal + ' کیلوگرم ';
    cm.innerHTML = heightVal + ' سانتی متر ';
}

//Calculate BMI
function Calculate() {
    let weightVal=weight.value;
    let heightVal=height.value;
    let total=((weightVal*10000)/(heightVal*heightVal));
    number.innerHTML=total.toFixed(1);
    //Health Status
    if (total < 18.5) {
        level.innerHTML="کمبود وزن";
    } else if (total > 18.5 && total < 24.6) {
        level.innerHTML="وزن سلامت";
    }
    else if (total > 25 && total < 30) {
        level.innerHTML="اضافه وزن";
    }
    else if (total > 30) {
        level.innerHTML="چاقی";
    }
    //Show and Hide Elements
    wrapper.classList.add("hide");
    loader.classList.add("show");
    preloader.classList.add("show");
    setTimeout(function () {
        loader.classList.remove("show");
        closeIcon.classList.add("show");
        container.classList.add("show");
    },3000)
    closeIcon.onclick=()=> {
        preloader.classList.remove("show");
        closeIcon.classList.remove("show");
        container.classList.remove("show");
    }
}