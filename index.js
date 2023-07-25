let menu=document.querySelector('#menu-bar');
let navItems=document.querySelectorAll('.items');
let  clearMenu=document.querySelector('#main-section');
let menuClose=document.querySelector('#menu-close');
menu.addEventListener('click',()=>{
    for(var i=0;i<navItems.length;i++)
    navItems[i].style.display="block";
    menuClose.style.display="block";
})

