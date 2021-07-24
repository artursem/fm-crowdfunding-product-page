const btnBookmark = document.querySelector('.btn-bookmark');
let isBookmarked = false;


function handleClick() {
    if(isBookmarked) {
        btnBookmark.classList.remove('btn-on');
        btnBookmark.classList.add('btn-off');
        btnBookmark.style.flexDirection = 'row';
        return isBookmarked = false;
    } else {
        btnBookmark.classList.remove('btn-off');
        btnBookmark.classList.add('btn-on');
        btnBookmark.style.flexDirection = 'row-reverse';
        return isBookmarked = true;
    } 
}

btnBookmark.addEventListener('click', handleClick);