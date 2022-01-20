const readMoreBtn = document.querySelector('.read_more_button');
const text = document.querySelector('.hiddentext');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('hiddentext');
    if (readMoreBtn.innerText === 'Show'){
        readMoreBtn.innerText = "Hide";
    } else {
        readMoreBtn.innerText = "Show";
    }
}); 

