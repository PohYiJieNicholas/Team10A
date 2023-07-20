// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const navFontsHome = document.getElementById('nav-link-home');
const navFontsBrainstorm = document.getElementById('nav-link-brainstorm');
const navFontsSolutions = document.getElementById('nav-link-solution');
const navFontsReflections = document.getElementById('nav-link-reflection');

const navbar_brand = document.getElementById('navBrand');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
        navFontsHome.style.color = 'white';
        navFontsBrainstorm.style.color = 'white';
        navFontsSolutions.style.color = 'white';
        navFontsReflections.style.color = 'white';

        navbar_brand.style.color = 'white';
    }
    else {
        header.classList.remove('navbarDark');
        navFontsHome.style.color = 'black';
        navFontsBrainstorm.style.color = 'black';
        navFontsSolutions.style.color = 'black';
        navFontsReflections.style.color = 'black';

        navbar_brand.style.color = 'black';
    }
}