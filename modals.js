const btn = document.querySelectorAll('.btn');
const modalSelect = document.querySelector('.back');
const modalSuccess = document.querySelector('.success');
const background = document.querySelector('.background');
const btnX = document.querySelector('.modal-close');
const body = document.querySelector('body');

function showSelect() {
    console.log('modal select');
    background.classList.remove('hide');
    modalSelect.classList.remove('hide');
    body.classList.add('modal-on');
    body.style.overflowY = 'hidden';
}

function showSuccess() {
    console.log('modal success');
}

function hideModal() {
    modalSelect.classList.add('hide');
    modalSuccess.classList.add('hide');
    background.classList.add('hide');
    body.classList.remove('modal-on');
    body.style.overflowY = 'auto';
}

btn.forEach(btn => btn.addEventListener('click', showSelect));
btnX.addEventListener('click', hideModal);
background.addEventListener('click', hideModal);