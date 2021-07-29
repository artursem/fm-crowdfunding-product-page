const btnOpen = document.querySelectorAll('.open-modal');
const btnSelect = document.querySelectorAll('.select-plan');
const modalSelect = document.querySelector('.back');
const modalSuccess = document.querySelector('.success');
const background = document.querySelector('.background');
const btnX = document.querySelectorAll('.modal-close');
const body = document.querySelector('body');
const rewardSections = document.querySelectorAll('.enabled');
const rewardOptions = document.querySelectorAll('.select-reward');
const rollouts = document.querySelectorAll('.modal__option__rollout');

rewardOptions[rewardOptions.length-1].disabled = true;

function showSelect() {
    background.classList.remove('hide');
    modalSelect.classList.remove('hide');
    body.classList.add('modal-on');
}

function showSuccess() {
    background.classList.remove('hide');
    modalSuccess.classList.remove('hide');
    body.classList.add('modal-on');
}

function hideModal() {
    modalSelect.classList.add('hide');
    modalSuccess.classList.add('hide');
    background.classList.add('hide');
    body.classList.remove('modal-on');
}

function chooseOption(option) {
    rewardSections.forEach(section => section.classList.remove('selected'));
    rollouts.forEach(rollout => rollout.classList.add('hide'));
    option.querySelector('input').checked = true;
    if (option.querySelector('input').checked === true) {
        option.classList.add('selected');
        option.querySelector('.modal__option__rollout').classList.remove('hide');
    }
}



btnOpen.forEach(btn => btn.addEventListener('click', showSelect));
btnX.forEach(btn => btn.addEventListener('click', hideModal));
background.addEventListener('click', hideModal);
rewardSections.forEach(option => option.addEventListener('click', function() {
    return chooseOption(this);
}));


btnSelect.forEach(btn => btn.addEventListener('click', () => {
    // console.log('clicked');
    // ######################################################
    // DRY
    // show / hideBackground()
    // body - showModal = true / separate function
    hideModal();
    showSuccess();
}))