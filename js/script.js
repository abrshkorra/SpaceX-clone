const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");

btn.addEventListener('click', navToogle);

function navToogle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
}