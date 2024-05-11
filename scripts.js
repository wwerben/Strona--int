// scrool background 

window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    const logo = document.querySelector('.logo');
    const links = document.querySelectorAll('.nav-link');
    const burger = document.querySelectorAll('.burger');

    if (window.scrollY > 50) {
        header.classList.add('h-20');
        header.classList.remove('h-28');
        header.classList.add('bg-opacity-80');
        header.classList.remove('h-28');
        logo.classList.add('h-16'); 
        logo.classList.remove('h-24');
        burger.classList.remove('h-14');
        burger.classList.add('h-10');
        burger.classList.remove('w-14');
        burger.classList.add('w-10');

    } else {
        header.classList.add('h-28');
        header.classList.remove('h-20');
        logo.classList.add('h-24');
        logo.classList.remove('h-16');
        header.classList.remove('bg-opacity-80');
        logo.classList.remove('h-20'); 
        burger.classList.remove('h-10');
        burger.classList.add('h-14');
        burger.classList.add('w-14');
        burger.classList.remove('w-10');

    
    }
});

// menu hamburger
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }
}

