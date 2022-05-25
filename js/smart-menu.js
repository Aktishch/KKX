let concertBlock = document.querySelector('.concert-nav__block');
let concertTitle = document.querySelector('.concert-nav__title');
let concertMenu = document.querySelector('.concert-nav__menu');
let concertListing = document.querySelector('.concert-nav__listing');
let concertBtn = document.querySelector('.concert-nav__btn');
let concerCount = document.querySelector('.concert-nav__count');
let breaks = [];

if(concertBlock){
    function updateNav(){
        let concertBlockWidth = concertBtn.classList.contains('hidden') ? concertBlock.offsetWidth : concertBlock.offsetWidth - concertBtn.offsetWidth;
        if(concertBlockWidth > 0){
            let concertMenuWidth = concertMenu.offsetWidth;
            
            if(concertMenuWidth > concertBlockWidth){
                breaks.push(concertMenuWidth);
                concertListing.prepend(concertMenu.lastElementChild);
                concertBtn.classList.remove('hidden');
                concerCount.innerText = breaks.length;
                updateNav();
            }else{
                if(concertBlockWidth > breaks[breaks.length - 1]){
                    breaks.pop();
                    concertMenu.append(concertListing.firstElementChild);
                    concerCount.innerText = breaks.length;
                }
                if(breaks.length < 1){
                    concertListing.classList.remove('active');
                }
                if(concertMenuWidth == 0){
                    concertTitle.classList.remove('hidden');
                }else{
                    concertTitle.classList.add('hidden');
                }
            }
            if(concertListing.querySelectorAll('li').length == 0){
                concertBtn.style.display = 'none';
            }else{
                concertBtn.style.display = 'block';
            }
        }
    }
    
    concertBtn.addEventListener('click', () => {
        concertListing.classList.toggle('active');
        concertBtn.classList.toggle('active');
    });
    
    window.addEventListener('resize', updateNav);
    document.addEventListener('DOMContentLoaded', updateNav);
}