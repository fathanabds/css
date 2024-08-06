const burger = document.querySelector('.menu-toggle input');
const menu = document.querySelector('nav ul');

burger.addEventListener('click',function(){
    menu.classList.toggle('slide');
});