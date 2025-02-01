const MenuHamburguer = document.querySelector('.menu-hamburguer')

MenuHamburguer.addEventListener('click',()=>{
    toggleMenu();
});

function toggleMenu (){
    const nav = document.querySelector('.nav');
    MenuHamburguer.classList.toggle('change');

    if(MenuHamburguer.classList.contains('change')){
        nav.style.display ='block';
    }else{
        nav.style.display ='none';
    }
}

function ChangeSize(){
    const nav = document.querySelector('.nav');
    if(window.innerWidth >= 768){
        nav.style.display ='block'
        console.log('passou')
    }else{
        nav.style.display ='none';
    }
}


