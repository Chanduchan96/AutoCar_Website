let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll=()=>{
if(window.scroll>0){
    document.querySelector('.header').classList.add('active');
}else{
    document.querySelector('.header').classList.remove('active');
}

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}