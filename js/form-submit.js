function validateForm(form){
    const inputs = form.querySelectorAll('.-validate-input-');
    let valid = true;
    inputs.forEach(el => {
        const error = el.nextElementSibling;
        el.addEventListener('input', () => {
            if(el.value.length > 0){
                el.classList.remove('-border-input-');
                error.classList.remove('-error-');
            };
        }, {once:  true});
        if(el.value == null || el.value == ""){
            el.focus();
            el.classList.add('-border-input-');
            error.classList.add('-error-');
            valid = false;
        }else{
            el.classList.remove('-border-input-');
            error.classList.remove('-error-');
        }
    });
    return valid;
}

document.addEventListener('submit', (event)=>{
    if(event.target.classList.contains('-validate-form-')){
        event.preventDefault();
        const valid = validateForm(event.target);
        if(valid){
            event.target.reset();
        }
    }
});