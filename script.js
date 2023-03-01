const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('navbar__logo')

// mobile menu bar
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);


// show menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    // add highlight class to menu items

    if(window.innerWidth>960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
   
    else if(window.innerWidth> 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth> 960 && scrollPos < 2345) {
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if(elem && window.innerWidth> 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
        return;
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// hide mobile menu when menu item clicked
const hideMobileMenu = () => {
    const menubar = document.querySelector('is-active');
    if(window.innerWidth <= 768 && menubar) {
        menu.classList.toggle('is-active');
        menuLink.classList.remove('active');
    }
};

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);













