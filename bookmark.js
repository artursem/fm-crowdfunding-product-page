const btnBookmark = document.querySelector('.btn-bookmark');
const text = document.querySelector('.btn-bookmark-text');
let isBookmarked = false;


function handleClick() {
    if(isBookmarked) {
        btnBookmark.classList.remove('btn-on');
        btnBookmark.classList.add('btn-off');
        btnBookmark.style.flexDirection = 'row';
        text.textContent = 'Bookmark';
        return isBookmarked = false;
    } else {
        btnBookmark.classList.remove('btn-off');
        btnBookmark.classList.add('btn-on');
        btnBookmark.style.flexDirection = 'row-reverse';
        text.textContent = 'Bookmarked';
        return isBookmarked = true;
    } 
}

btnBookmark.addEventListener('click', handleClick);