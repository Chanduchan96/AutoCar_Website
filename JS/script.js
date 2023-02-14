let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick =()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
    
}

window.onscroll = function() {
    if(window.scrollY>0)
    {
        document.querySelector('.header').classList.add('active');
    }else{
        
            document.querySelector('.header').classList.remove('active');
        
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = function() {
    if(window.scrollY>0)
    {
        document.querySelector('.header').classList.add('active');
    }else{
        
            document.querySelector('.header').classList.remove('active');
        
    }
  
}