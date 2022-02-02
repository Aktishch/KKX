const internalBlocks = document.querySelectorAll('.internal-news__block');

if(internalBlocks){
    internalBlocks.forEach(el => {
        const internalPictures = el.querySelectorAll('.internal-news__picture');
        if(internalPictures.length > 1){
            el.classList.add('-column-');
        }else{
            el.classList.remove('-column-');
        }
    });
}