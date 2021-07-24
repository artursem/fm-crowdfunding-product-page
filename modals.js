const btn = document.querySelectorAll('.btn');
const modalSelect = document.querySelector('.back');
const modalSuccess = document.querySelector('.success');
const background = document.querySelector('.background');
const btnX = document.querySelector('.modal-close');


function showSelect() {
    console.log('modal select');
    background.classList.remove('hide');
    modalSelect.classList.remove('hide');
}

function showSuccess() {
    console.log('modal success');
}

function hideModal() {
    modalSelect.classList.add('hide');
    modalSuccess.classList.add('hide');
    background.classList.add('hide');
}

btn.forEach(btn => btn.addEventListener('click', showSelect));
btnX.addEventListener('click', hideModal);
window.addEventListener('click', (e) => {
    // if ANY modal !hide
    // and click outside modal
    // hideModal();
    
    console.log(e.target);
})