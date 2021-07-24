const btn = document.querySelectorAll('.btn');
const modalSelect = document.querySelector('.back');
const modalSuccess = document.querySelector('.success');
const background = document.querySelector('.background');

function showSelect() {
    console.log('modal select');
    background.classList.remove('hide');
    modalSelect.classList.remove('hide');
}

function showSuccess() {
    console.log('modal success');
}

btn.forEach(btn => btn.addEventListener('click', showSelect));