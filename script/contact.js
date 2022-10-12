const nav = document.querySelector("nav");

window.addEventListener("scroll", toggleNavBar);

function toggleNavBar(){
    let scrollValue = window.scrollY;

    if(scrollValue > 0){
        nav.style.backgroundColor = "black";
        nav.style.color = "white"
    }else{
        nav.style.backgroundColor = "transparent";
    }
}