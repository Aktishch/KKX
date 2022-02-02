document.addEventListener('click', (event) => {
    if(event.target.classList.contains('-increase-')){
        ++event.target.parentElement.querySelector('.-input-quantity-').value;
    }else if(event.target.classList.contains('-decrease-')) {
        --event.target.parentElement.querySelector('.-input-quantity-').value;
        if(event.target.parentElement.querySelector('.-input-quantity-').value < 1){
            event.target.parentElement.querySelector('.-input-quantity-').value = 1;
        }
    }
});

document.addEventListener('input', (event) => {
    if(event.target.classList.contains('-input-quantity-')){
        event.target.value = event.target.value.replace(/\D/g, "");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const line = document.querySelector('.filter__line');
    const buttons = document.querySelectorAll('.filter__head-item');
    const cards = document.querySelectorAll('.filter__block');
    if(line){
        line.style.width = `${buttons[0].offsetWidth}px`;
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                let current = document.getElementsByClassName("filter__head-item--bolt");
                current[0].className = current[0].className.replace("filter__head-item--bolt", "");
                this.className += " filter__head-item--bolt";
            });
        }
    
        buttons.forEach(el => {
            el.addEventListener('click', (e) => {
                line.style.width = `${e.currentTarget.offsetWidth}px`;
                line.style.left = `${e.currentTarget.offsetLeft}px`;
                el.style.fontWeight = "bolt";
            });
        });
    }
    
    function filtering(){

        function filter(category, items){
            items.forEach((item) => {
                const itemFilter = !item.classList.contains(category);
                if(itemFilter){
                    item.classList.add('-block-hide-');
                }else{
                    item.classList.remove('-block-visible-');
                    item.classList.remove('-block-hide-');
                }
            });
        }

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const current = button.dataset.filter;
                filter(current, cards);
            });
        });

        cards.forEach((card) => {
            card.ontransitionend = function(){
                if(card.classList.contains('-block-hide-')){
                    card.classList.add('-block-visible-');
                }
            }
        });
    }

    filtering();
});