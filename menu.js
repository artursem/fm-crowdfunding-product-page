const btn = document.querySelector('.header__nav__hamburger');
const icon = btn.querySelector('img');
const menu = document.querySelector('ul');


let isMenuOpen = false;

function showMenu() {
    icon.src = './images/icon-close-menu.svg';
    menu.style.display = 'flex';
    background.classList.remove('hide');
    isMenuOpen = true;
    return isMenuOpen;
}

function hideMenu() {
    icon.src = './images/icon-hamburger.svg';
    menu.style.display = 'none';
    background.classList.add('hide');
    isMenuOpen = false;
    return isMenuOpen;
}
function menuClick() {
    if (isMenuOpen) {
        hideMenu();
    } else {
        showMenu();
    }
}

btn.addEventListener('click', menuClick);
background.addEventListener('click', hideMenu);
menu.addEventListener('click', () => {
    if(window.innerWidth < 999) {
        hideMenu();
    }
});